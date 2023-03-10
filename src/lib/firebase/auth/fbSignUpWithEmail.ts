import { DATA_ERROR } from "@/data/error";
import { ResolverReturnType } from "@/types/resolver";
import { UserDataClientType } from "@/types/user";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../client";

type FbSignUnWithEmailType = (props: FbSignUnWithEmailProps) => Promise<FbSignUnWithEmailResult>;

type FbSignUnWithEmailProps = {
	email: string;
	password: string;
};

type FbSignUnWithEmailResult = ResolverReturnType & {
	user?: UserDataClientType;
};

const fbSignUpWithEmail: FbSignUnWithEmailType = async ({ email, password }) => {
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		return {
			ok: true,
		};
	} catch (error: any) {
		return {
			ok: false,
			message: DATA_ERROR.signUp[error.code] || DATA_ERROR.signUp.default,
		};
	}
};

export default fbSignUpWithEmail;
