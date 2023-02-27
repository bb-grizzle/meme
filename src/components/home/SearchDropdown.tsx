import useHomeTag from "@/provider/HomeProvider/useHomeTag";
import { TagDataClientType } from "@/types/tag";
import styled from "styled-components";
import Tag from "../tag";

interface SearchDropdownProps {
	tags: TagDataClientType[];
	createKeyword: () => void;
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
	${(props) => props.theme.style.hoverStyle};
`;

const SearchDropdown: React.FC<SearchDropdownProps> = ({ tags, createKeyword }) => {
	const { selectTag } = useHomeTag();

	const onListClick = (id: string) => {
		selectTag(id);
	};

	return (
		<Ul>
			{!tags.length && <Li onClick={createKeyword}>create new!</Li>}
			{tags.map((tag) => {
				return (
					<Li key={tag.id} onClick={() => onListClick(tag.id)}>
						<Tag {...tag} />
					</Li>
				);
			})}
		</Ul>
	);
};

export default SearchDropdown;
