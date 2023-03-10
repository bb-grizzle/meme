import { DATA_ERROR } from "@/data/error";
import { ResolverReturnType } from "@/types/resolver";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../client";

type FbFindPwType = (props: FbFindPwProps) => Promise<ResolverReturnType>;

type FbFindPwProps = {
	email: string;
};

const fbFindPw: FbFindPwType = async ({ email }) => {
	try {
		await sendPasswordResetEmail(auth, email);

		return {
			ok: true,
		};
	} catch (error: any) {
		return {
			ok: false,
			message: DATA_ERROR.findPw.default,
		};
	}
};

export default fbFindPw;
