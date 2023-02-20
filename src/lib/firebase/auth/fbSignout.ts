import { auth } from "../client";

const fbSignout = async () => {
	try {
		await auth.signOut();
	} catch (error) {
		console.log(error);
	}
};

export default fbSignout;
