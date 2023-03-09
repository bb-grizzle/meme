import { DATA_COLLECTION } from "@/data/collection";
import { DATA_ERROR } from "@/data/error";
import { ResolverReturnType } from "@/types/resolver";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../client";
type FbCheckEmailType = (props: FbCheckEmailProps) => Promise<FbCheckEmailReturn>;

type FbCheckEmailProps = {
	email: string;
};

type FbCheckEmailReturn = ResolverReturnType & {
	exist?: boolean;
};

const fbCheckEmail: FbCheckEmailType = async ({ email }) => {
	try {
		// 01. check email
		const userRef = collection(firestore, DATA_COLLECTION.USER);
		const q = query(userRef, where("email", "==", email));
		const querySnapshot = await getDocs(q);
		const exist = querySnapshot.docs.length > 0;
		return { ok: true, exist };
	} catch (error) {
		return { ok: false, message: DATA_ERROR.signIn.checkUser };
	}
};

export default fbCheckEmail;
