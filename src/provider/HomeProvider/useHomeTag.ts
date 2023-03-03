import { HomeContext } from "./index";
import { useContext, useEffect } from "react";
import { TagDataClientType } from "@/types/tag";
import { activeScroll, preventScroll } from "@/util/scroll";

const useHomeTag = () => {
	// FIELD
	const { tagsState, changedTagsIdState, isAllTagsClickState } = useContext(HomeContext);
	const [tags, setTags] = tagsState;
	const [_, setChangedId] = changedTagsIdState;
	const [isAllTagsClick, setIsAllTagsClick] = isAllTagsClickState;

	// STATE
	useEffect(() => {
		if (isAllTagsClick) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [isAllTagsClick]);

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
				return [...prev, { id: selected.id, active: !selected.active, keyword: selected.keyword }];
			}
		});
	};

	const openAllTags = () => {
		setIsAllTagsClick(true);
	};
	const closeAllTags = () => {
		setIsAllTagsClick(false);
	};

	return { tags, selectTag, addChangedId, openAllTags, isAllTagsClick, closeAllTags };
};

export default useHomeTag;
