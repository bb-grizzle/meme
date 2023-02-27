import { TagDataClientType } from "@/types/tag";
import styled from "styled-components";

interface TagProps extends TagDataClientType {}
const Wrapper = styled.div``;
const Text = styled.p``;

const Tag: React.FC<TagProps> = ({ keyword, id }) => {
	return (
		<Wrapper id={id}>
			<Text>{keyword}</Text>
		</Wrapper>
	);
};

export default Tag;
