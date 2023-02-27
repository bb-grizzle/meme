import { DATA_ERROR } from "@/data/error";
import { HomeContext } from "./index";
import { useContext } from "react";
import fbTagCreate from "@/lib/firebase/tag/fbTagCreate";

const useHomeSearch = () => {
	// FIELD
	const { tagsState, searchTagsState } = useContext(HomeContext);
	const [tags, setTags] = tagsState;
	const [searchTags, setSearchTags] = searchTagsState;

	// METHOD
	// : search existing tags
	const findSearchTags = async (keyword: string) => {
		try {
			if (!!keyword) {
				setSearchTags((prev) => ({ ...prev, data: !!tags.data ? tags.data.filter((tag) => tag.keyword.includes(keyword)) : [] }));
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
				setTags((prev) => ({ loading: false, error: "", data: prev.data ? [data, ...prev.data] : [data] }));
			}
		} catch (error) {
			console.log(error);
			setTags((prev) => ({ ...prev, loading: false, error: DATA_ERROR.tag.default }));
		}
	};

	return { createTag, searchTags, findSearchTags };
};

export default useHomeSearch;
