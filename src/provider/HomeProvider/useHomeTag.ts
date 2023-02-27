import { HomeContext } from "./index";
import { useContext } from "react";
import { TagDataClientType } from "@/types/tag";

const useHomeTag = () => {
	// FIELD
	const { tagsState, changedTagsIdState } = useContext(HomeContext);
	const [tags, setTags] = tagsState;
	const [_, setChangedId] = changedTagsIdState;

	// STATE

	// METHOD
	const selectTag = (id: string) => {
		const selected = tags.data?.find((tag) => tag.id === id);
		if (!selected) return;
		setTags((prev) => ({ ...prev, data: prev.data ? prev.data.map((tag) => (tag.id === id ? { ...tag, active: !tag.active } : tag)) : prev.data }));

		addChangedId(selected);
	};

	const addChangedId = (selected: TagDataClientType) => {
		setChangedId((prev) => {
			const checkExist = prev.some((el) => el.id === selected.id);
			if (checkExist) {
				return prev.filter((el) => el.id !== selected.id);
			} else {
				return [...prev, { id: selected.id, active: !selected.active }];
			}
		});
	};

	return { tags, selectTag, addChangedId };
};

export default useHomeTag;
