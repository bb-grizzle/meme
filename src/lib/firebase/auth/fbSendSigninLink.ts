import { DATA_ERROR } from "@/data/error";
import { ROUTER } from "@/router";

import { ResolverReturnType } from "@/types/resolver";
import { ActionCodeSettings, sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../client";

type FbSigninType = (props: FbSigninProps) => Promise<ResolverReturnType>;

type FbSigninProps = {
	email: string;
};

const fbSendSigninLink: FbSigninType = async ({ email }) => {
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
		return {
			ok: false,
			message: DATA_ERROR.signin[error.code] || DATA_ERROR.signin.default,
		};
	}
};

export default fbSendSigninLink;
