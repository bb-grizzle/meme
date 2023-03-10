import { DATA_ERROR } from "@/data/error";
import { ResolverReturnType } from "@/types/resolver";
import { UserDataClientType } from "@/types/user";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../client";
import createOrReadUser from "../shared/createOrReadUser";

type FbSignInWithEmailType = (props: FbSignInWithEmailProps) => Promise<FbSignInWithEmailResult>;

type FbSignInWithEmailProps = {
	email: string;
	password: string;
};

type FbSignInWithEmailResult = ResolverReturnType & {
	user?: UserDataClientType;
};

const fbSignInWithEmail: FbSignInWithEmailType = async ({ email, password }) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);

		return {
			ok: true,
		};
	} catch (error: any) {
		console.log(error);
		return {
			ok: false,
			message: DATA_ERROR.signIn.default,
		};
	}
};

export default fbSignInWithEmail;
