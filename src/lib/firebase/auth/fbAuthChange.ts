import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../client";

type FbAuthChangeProps = {
	changeUser: (user: User) => void;
	clearUser: () => void;
};

const fbAuthChange = ({ changeUser, clearUser }: FbAuthChangeProps) => {
	onAuthStateChanged(auth, (user) => {
		if (process.env.NODE_ENV === "development") {
			console.log("🌈 user : ", user);
		}

		if (user) {
			changeUser(user);
		} else {
			clearUser();
		}
	});
};

export default fbAuthChange;
