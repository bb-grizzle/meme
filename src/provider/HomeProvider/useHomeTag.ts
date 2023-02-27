import { HomeContext } from "./index";
import { useContext, useEffect } from "react";
import fbTagGet from "@/lib/firebase/tag/fbTagGet";
import useUser from "../AppProvider/useUser";

const useHomeTag = () => {
	// FIELD
	const { tagsState, changedTagsIdState } = useContext(HomeContext);
	const [tags, setTags] = tagsState;
	const [changedId, setChangedId] = changedTagsIdState;
	const { updateUserTags } = useUser();

	// STATE

	// METHOD
	const selectTag = (id: string) => {
		const selected = tags.data?.find((tag) => tag.id === id);
		if (!selected) return;
		setTags((prev) => ({ ...prev, data: prev.data ? prev.data.map((tag) => (tag.id === id ? { ...tag, active: !tag.active } : tag)) : prev.data }));

		setChangedId((prev) => {
			const checkExist = prev.some((el) => el.id === selected.id);
			if (checkExist) {
				return prev.filter((el) => el.id !== selected.id);
			} else {
				return [...prev, { id: selected.id, active: !selected.active }];
			}
		});
	};

	return { tags, selectTag };
};

export default useHomeTag;
