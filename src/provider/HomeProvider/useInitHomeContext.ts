import { DATA_ERROR } from "@/data/error";
import { useEffect } from "react";
import fbTagGet from "@/lib/firebase/tag/fbTagGet";
import { HomeContextProps } from ".";

const useInitHomeContext = (ctx: HomeContextProps) => {
	const { tagsState } = ctx;
	const [_, setTags] = tagsState;

	// STATE
	// : get all tags
	useEffect(() => {
		const getTags = async () => {
			try {
				setTags((prev) => ({ ...prev, loading: true }));
				const { ok, data } = await fbTagGet();
				if (ok && data) {
					setTags({ loading: false, error: "", data });
				}
			} catch (error) {
				console.log(error);
				setTags((prev) => ({ ...prev, loading: false, error: DATA_ERROR.tag.default }));
			}
		};
		getTags();
	}, []);

	return;
};

export default useInitHomeContext;
