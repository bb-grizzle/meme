import { DATA_ERROR } from "@/data/error";
import PageLayout from "@/layout/PageLayout";
import fbCheckSignin from "@/lib/firebase/auth/fbCheckSignin";
import useUser from "@/provider/AppProvider/useUser";
import { ROUTER } from "@/router";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Signup = () => {
	const { query, push } = useRouter();
	const { updateUserName } = useUser();

	useEffect(() => {
		const checkSignin = async () => {
			if (!query.mode) return;
			const { mode } = query;

			// 01. check url got mode param
			if (mode !== "signIn") push(ROUTER.signin);

			// 02. send fb check signin
			const { ok, message, user } = await fbCheckSignin();

			if (!ok) {
				console.log(message);
				await alert(message ?? DATA_ERROR.signIn.default);
				push(ROUTER.signin);
			}

			if (ok && user) {
				if (user.displayName) {
					updateUserName(user.displayName);
				}
				push(ROUTER.home);
			}
		};
		checkSignin();
		// eslint-disable-next-line
	}, [query]);

	return <PageLayout title="Sign Up">signup</PageLayout>;
};

export default Signup;
