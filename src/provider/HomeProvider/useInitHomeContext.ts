import useUser from "@/provider/AppProvider/useUser";
import { DATA_ERROR } from "@/data/error";
import { useEffect } from "react";
import fbTagGet from "@/lib/firebase/tag/fbTagGet";
import { HomeContextProps } from ".";

const useInitHomeContext = (ctx: HomeContextProps) => {
	const { tagsState } = ctx;
	const [_, setTags] = tagsState;
	const { user } = useUser();

	// STATE
	// : get all tags
	useEffect(() => {
		const getTags = async () => {
			if (!user) return;

			try {
				setTags((prev) => ({ ...prev, loading: true }));

				const { ok, data } = await fbTagGet({ user });
				if (ok && data) {
					setTags({ loading: false, error: "", data });
				}
			} catch (error) {
				console.log(error);
				setTags((prev) => ({ ...prev, loading: false, error: DATA_ERROR.tag.default }));
			}
		};
		getTags();
	}, [user]);

	return;
};

export default useInitHomeContext;
