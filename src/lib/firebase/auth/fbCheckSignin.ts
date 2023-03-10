import { DATA_COLLECTION } from "./../../../data/collection";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { DATA_ERROR } from "@/data/error";
import { ResolverReturnType } from "@/types/resolver";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth, firestore } from "../client";
import { UserDataClientType } from "@/types/user";

type FbCheckSigninType = () => Promise<
	ResolverReturnType & {
		user?: UserDataClientType;
	}
>;

const fbCheckSignin: FbCheckSigninType = async () => {
	try {
		// 01. check link
		if (!isSignInWithEmailLink(auth, window.location.href)) {
			return {
				ok: false,
				message: DATA_ERROR.signIn.url,
			};
		}

		// 02. find saved email
		const email = window.localStorage.getItem("emailForSignIn");
		if (!email) {
			return {
				ok: false,
				message: DATA_ERROR.signIn.browser,
			};
		}

		// 03. sign in with email
		let user: UserDataClientType = {} as UserDataClientType;

		await signInWithEmailLink(auth, email, window.location.href);
		window.localStorage.removeItem("emailForSignIn");

		if (auth.currentUser) {
			const userDoc = await getDoc(doc(firestore, DATA_COLLECTION.USER, auth.currentUser.uid));
			auth.currentUser.displayName;

			if (!userDoc.exists()) {
				const userUpload = { email, tags: [], createdAt: Timestamp.now(), updatedAt: Timestamp.now(), displayName: email.split("@")[0] };
				await setDoc(doc(firestore, DATA_COLLECTION.USER, auth.currentUser.uid), userUpload);
				user = { ...userUpload, uid: auth.currentUser.uid };
			} else {
				const userData = userDoc.data();

				const tags = await Promise.all(
					userData.tags.map(async (tagId: string) => {
						const tagDoc = await getDoc(doc(firestore, DATA_COLLECTION.TAG, tagId));
						return { id: tagDoc.id, ...tagDoc.data() };
					})
				);

				user = { ...userData, uid: auth.currentUser.uid, tags } as UserDataClientType;
			}

			return {
				ok: true,
				user,
			};
		} else {
			return {
				ok: false,
				message: DATA_ERROR.signIn.default,
			};
		}
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			message: DATA_ERROR.signIn.default,
		};
	}
};

export default fbCheckSignin;
