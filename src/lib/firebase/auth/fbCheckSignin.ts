import { DATA_ERROR } from "@/data/error";
import { ResolverReturnType } from "@/types/resolver";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "../client";

type FbCheckSigninType = () => Promise<ResolverReturnType>;

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
				message: DATA_ERROR.signIn.default,
			};
		}

		// 03. sign in with email
		await signInWithEmailLink(auth, email, window.location.href);
		window.localStorage.removeItem("emailForSignIn");
		return {
			ok: true,
		};
	} catch (error) {
		return {
			ok: false,
			message: DATA_ERROR.signIn.default,
		};
	}
};

export default fbCheckSignin;
