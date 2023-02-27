import useHomeTag from "@/provider/HomeProvider/useHomeTag";
import { useCallback } from "react";
import Tag from "../tag";

const AllTags = () => {
	const { tags } = useHomeTag();

	const render = useCallback(() => {
		if (tags.loading) {
			return "loading";
		} else if (tags.error) {
			return tags.error;
		} else if (!tags.data?.length) {
			return "not yet";
		} else {
			return tags.data.map((tag) => {
				return <Tag key={tag.id} {...tag} />;
			});
		}
	}, [tags]);

	return <>{render()}</>;
};

export default AllTags;
