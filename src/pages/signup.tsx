import PageLayout from "@/layout/PageLayout";
import fbCheckSignin from "@/lib/firebase/auth/fbCheckSignin";
import useUser from "@/provider/AppProvider/useUser";
import { ROUTER } from "@/router";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Signup = () => {
	const { query, push } = useRouter();

	useEffect(() => {
		const checkSignin = async () => {
			if (!query.mode) return;
			const { mode } = query;

			// 01. check url got mode param
			if (mode !== "signIn") push(ROUTER.signin);

			// 02. send fb check signin
			const { ok } = await fbCheckSignin();

			if (ok) {
				push(ROUTER.home);
			}
		};
		checkSignin();
		// eslint-disable-next-line
	}, [query]);

	return <PageLayout title="Sign Up">signup</PageLayout>;
};

export default Signup;
