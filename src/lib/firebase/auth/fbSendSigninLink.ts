import { DATA_ERROR } from "@/data/error";
import { ROUTER } from "@/router";

import { ResolverReturnType } from "@/types/resolver";
import { ActionCodeSettings, sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../client";

type FbSigninType = (props: FbSigninProps) => Promise<ResolverReturnType>;

type FbSigninProps = {
	email: string;
};

const fbSignin: FbSigninType = async ({ email }) => {
	try {
		// send email
		const url = `${window.location.origin}/${ROUTER.signup}`;
		const actionCodeSettings: ActionCodeSettings = {
			url,
			handleCodeInApp: true,
		};

		await sendSignInLinkToEmail(auth, email, actionCodeSettings);
		window.localStorage.setItem("emailForSignIn", email);

		return {
			ok: true,
		};
	} catch (error: any) {
		console.log(error);

		return {
			ok: false,
			message: DATA_ERROR.sendEmail,
		};
	}
};

export default fbSignin;
