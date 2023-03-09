import { DATA_ERROR } from "@/data/error";
import { UserDataClientType } from "./../../../types/user";
import { DATA_COLLECTION } from "./../../../data/collection";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../client";
import createOrReadUser from "../shared/createOrReadUser";

type FbAuthChangeProps = {
	changeUser: (user: UserDataClientType) => void;
	clearUser: () => void;
};

const fbAuthChange = ({ changeUser, clearUser }: FbAuthChangeProps) => {
	onAuthStateChanged(auth, async (user) => {
		try {
			if (user) {
				if (process.env.NODE_ENV === "development") {
					console.log("🌈 user : ", user);
				}

				const { user: nowUser } = await createOrReadUser(user);

				if (process.env.NODE_ENV === "development") {
					console.log("😀 nowUser : ", nowUser);
				}

				changeUser(nowUser);
			} else {
				clearUser();
			}
		} catch (error) {
			console.dir(error);
			return;
		}
	});
};

export default fbAuthChange;
