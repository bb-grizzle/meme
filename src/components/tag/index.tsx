import { TagDataClientType } from "@/types/tag";
import styled, { css } from "styled-components";

interface TagProps extends TagDataClientType {
	onClick?: () => void;
}

const Wrapper = styled.div<{ active: boolean; event: boolean }>`
	${(props) => props.event && props.theme.style.hoverStyle}

	${(props) =>
		!props.active
			? css`
					color: ${props.theme.colorPalette.bw[400]};
			  `
			: css`
					color: ${props.theme.color.main};
			  `};
`;

const Text = styled.p``;

const Tag: React.FC<TagProps> = ({ keyword, id, active = false, onClick }) => {
	return (
		<Wrapper id={id} active={active} event={!!onClick} onClick={onClick}>
			<Text>{keyword}</Text>
		</Wrapper>
	);
};

export default Tag;
