import { DATA_ERROR } from "@/data/error";
import fbProfileGet from "@/lib/firebase/profile/fbProfileGet";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ProfileContextProps } from ".";

const useInitProfileContext = (ctx: ProfileContextProps) => {
	const { profileState } = ctx;
	const [_, setProfile] = profileState;
	const { query } = useRouter();

	useEffect(() => {
		if (query.id) {
			getProfile(`${query.id}`);
		}
	}, [query.id]);

	const getProfile = async (id: string) => {
		try {
			setProfile((prev) => ({ ...prev, loading: true }));
			const { ok, message, data } = await fbProfileGet({ id });
			if (!ok) {
				console.log(message);
				setProfile((prev) => ({ ...prev, loading: false, error: message ?? DATA_ERROR.profile.default }));
			}

			if (ok && data) {
				setProfile((prev) => ({ ...prev, loading: false, data }));
			}
		} catch (error: any) {
			setProfile((prev) => ({ ...prev, loading: false, error: error.message }));
		}
	};

	return;
};

export default useInitProfileContext;
