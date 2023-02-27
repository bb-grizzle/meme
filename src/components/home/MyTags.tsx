import useUser from "@/provider/AppProvider/useUser";
import { useCallback } from "react";
import Tag from "../tag";

const MyTags = () => {
	const { user } = useUser();

	const render = useCallback(() => {
		if (!user) return "loading...";
		else if (!user.tags.length) return "there are no tags...";
		else
			return user.tags.map((tag) => {
				return <Tag {...tag} key={tag.id} />;
			});
	}, [user]);

	return <>{render()}</>;
};

export default MyTags;
