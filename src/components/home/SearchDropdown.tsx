import { TagDataClientType } from "@/types/tag";
import styled from "styled-components";

interface SearchDropdownProps {
	tags: TagDataClientType[];
}

const Ul = styled.ul`
	border: 1px solid black;
	position: absolute;
	left: 0;
	top: calc(100% + 16px);
	width: 100%;
	background-color: ${(props) => props.theme.color.white};
	padding: 16px;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

const Li = styled.li`
	padding: 4px;
	border: 1px solid black;
	font-weight: 100;
`;

const SearchDropdown: React.FC<SearchDropdownProps> = ({ tags }) => {
	const onListClick = (value: string) => {};

	return (
		<Ul>
			{!tags.length && <Li>no result</Li>}
			{tags.map((tag) => {
				return (
					<Li key={tag.id} onClick={() => onListClick(tag.keyword)}>
						{tag.keyword}
					</Li>
				);
			})}
		</Ul>
	);
};

export default SearchDropdown;
