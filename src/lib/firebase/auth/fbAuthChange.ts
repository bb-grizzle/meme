import { UserDataClientType } from "./../../../types/user";
import { DATA_COLLECTION } from "./../../../data/collection";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, firestore } from "../client";

type FbAuthChangeProps = {
	changeUser: (user: UserDataClientType) => void;
	clearUser: () => void;
};

const fbAuthChange = ({ changeUser, clearUser }: FbAuthChangeProps) => {
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			const userData = await getDoc(doc(firestore, DATA_COLLECTION.USER, user.uid));
			const nowUser = { ...userData.data(), uid: user.uid } as UserDataClientType;

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
