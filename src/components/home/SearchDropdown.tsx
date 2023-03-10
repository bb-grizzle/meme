import useHomeTag from "@/provider/HomeProvider/useHomeTag";
import { TagDataClientType } from "@/types/tag";
import styled from "styled-components";
import Tag from "../tag";

interface SearchDropdownProps {
	tags: TagDataClientType[];
	createKeyword: () => void;
}

const Ul = styled.ul`
	position: absolute;
	left: 0;
	top: 100%;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 4px;
	margin-top: 12px;
`;

const Li = styled.li`
	font-weight: 100;
	${(props) => props.theme.style.hoverStyle};
`;

const TagCreate = styled(Tag)`
	border: 1px solid ${(props) => props.theme.colorPalette.bw[900]};
	color: ${(props) => props.theme.colorPalette.bw[900]};
`;

const SearchDropdown: React.FC<SearchDropdownProps> = ({ tags, createKeyword }) => {
	const { selectTag } = useHomeTag();

	const onListClick = (id: string) => {
		selectTag(id);
	};

	return (
		<Ul>
			{!tags.length && (
				<Li onClick={createKeyword}>
					<TagCreate keyword="+ create new" id="tag-create" />
				</Li>
			)}
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
