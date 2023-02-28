import { DATA_ERROR } from "@/data/error";
import { HomeContext } from "./index";
import { useContext } from "react";
import fbTagCreate from "@/lib/firebase/tag/fbTagCreate";
import useHomeTag from "./useHomeTag";
import { TagDataClientType } from "@/types/tag";

const useHomeSearch = () => {
	// FIELD
	const { tagsState, searchTagsState } = useContext(HomeContext);
	const [tags, setTags] = tagsState;
	const [searchTags, setSearchTags] = searchTagsState;
	const { addChangedId } = useHomeTag();

	// METHOD
	// : search existing tags
	const findSearchTags = async (keyword: string) => {
		try {
			if (!!keyword) {
				setSearchTags((prev) => ({ ...prev, data: !!tags.data ? tags.data.filter((tag) => tag.keyword.toLowerCase().includes(keyword.toLowerCase())) : [] }));
			} else {
				setSearchTags((prev) => ({ ...prev, data: null }));
			}
		} catch (error) {
			setSearchTags((prev) => ({ ...prev, error: DATA_ERROR.tag.default }));
		}
	};

	// : create new tag
	const createTag = async (keyword: string) => {
		try {
			setTags((prev) => ({ ...prev, loading: true }));
			const { ok, data } = await fbTagCreate({ keyword });
			if (ok && data) {
				const activeTag: TagDataClientType = { ...data, active: true };
				setTags((prev) => ({ loading: false, error: "", data: prev.data ? [activeTag, ...prev.data] : [activeTag] }));

				addChangedId(data);
			}
		} catch (error) {
			console.log(error);
			setTags((prev) => ({ ...prev, loading: false, error: DATA_ERROR.tag.default }));
		}
	};

	return { createTag, searchTags, findSearchTags };
};

export default useHomeSearch;
