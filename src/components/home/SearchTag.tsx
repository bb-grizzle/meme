import useInputDefault from "@/hook/useInputDefault";
import InputText from "../input/InputText";
import styled from "styled-components";
import useHomeSearch from "@/provider/HomeProvider/useHomeSearch";
import SearchDropdown from "./SearchDropdown";

let searchTimeout = setTimeout(() => {}, 0);

const Wrapper = styled.div`
	margin-top: 16px;
	position: absolute;
	width: 100%;
	z-index: ${(props) => props.theme.zIndex.home.search};
`;

const SearchTag = () => {
	const searchHook = useInputDefault({
		inputOption: { name: "search", placeholder: "search your tag", type: "search" },
		format: (val) => `${val}`.replaceAll(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, ""),
	});
	const { createTag, searchTags, findSearchTags } = useHomeSearch();

	const createKeyword = async () => {
		if (!searchHook.value) return;
		await createTag(`${searchHook.value}`);
		searchHook.clear();
	};

	const onKeyUp = async () => {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(async () => {
			await findSearchTags(`${searchHook.value}`);
		}, 500);
	};

	const onBlur = async () => {
		setTimeout(async () => {
			await findSearchTags(``);
			searchHook.clear();
		}, 500);
	};

	const onEnter = () => {
		if (searchTags.data?.length === 0) {
			createKeyword();
		}
	};

	return (
		<Wrapper>
			<InputText {...searchHook} onEnter={onEnter} inputOption={{ ...searchHook.inputOption, onKeyUp, onBlur }} />

			{searchTags.data && <SearchDropdown tags={searchTags.data} createKeyword={createKeyword} />}
		</Wrapper>
	);
};

export default SearchTag;
