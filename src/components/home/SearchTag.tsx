import useInputDefault from "@/hook/useInputDefault";
import InputText from "../input/InputText";
import styled from "styled-components";
import { FormEvent } from "react";
import useHomeSearch from "@/provider/HomeProvider/useHomeSearch";
import SearchDropdown from "./SearchDropdown";

let searchTimeout = setTimeout(() => {}, 0);

const Form = styled.form`
	margin-top: 16px;
	position: absolute;
	width: 100%;
	z-index: ${(props) => props.theme.zIndex.home.search};
`;

const SearchTag = () => {
	const searchHook = useInputDefault({ inputOption: { name: "search", placeholder: "search your tag", type: "search" } });
	const { createTag, searchTags, findSearchTags } = useHomeSearch();

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createKeyword();
	};

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

	return (
		<Form onSubmit={onSubmit}>
			<InputText {...searchHook} inputOption={{ ...searchHook.inputOption, onKeyUp, onBlur }} />

			{searchTags.data && <SearchDropdown tags={searchTags.data} createKeyword={createKeyword} />}
		</Form>
	);
};

export default SearchTag;
