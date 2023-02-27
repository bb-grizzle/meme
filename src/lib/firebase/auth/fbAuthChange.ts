import { UserDataClientType } from "./../../../types/user";
import { DATA_COLLECTION } from "./../../../data/collection";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../client";

type FbAuthChangeProps = {
	changeUser: (user: UserDataClientType) => void;
	clearUser: () => void;
};

const fbAuthChange = ({ changeUser, clearUser }: FbAuthChangeProps) => {
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			const userDocRef = await getDoc(doc(firestore, DATA_COLLECTION.USER, user.uid));
			const userData = userDocRef.data();

			const tags = await Promise.all(
				userData?.tags.map(async (tagId: string) => {
					const tagDoc = await getDoc(doc(firestore, DATA_COLLECTION.TAG, tagId));
					return { id: tagDoc.id, ...tagDoc.data() };
				})
			);

			const nowUser = { ...userDocRef.data(), uid: user.uid, tags } as UserDataClientType;

			if (process.env.NODE_ENV === "development") {
				console.log("🌈 user : ", user);
				console.log("😀 nowUser : ", nowUser);
			}

			changeUser(nowUser);
		} else {
			clearUser();
		}
	});
};

export default fbAuthChange;
