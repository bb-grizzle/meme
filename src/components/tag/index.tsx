import { colorPalette } from "@/styles/theme/colorPalette";
import { TagDataClientType } from "@/types/tag";
import styled, { css } from "styled-components";

interface TagProps extends Partial<TagDataClientType> {
	onClick?: () => void;
	className?: string;
}

const Wrapper = styled.div<{ active: boolean; event: boolean }>`
	padding: 8px 12px;
	padding-bottom: 10px;
	border-radius: 999px;
	${(props) => props.event && props.theme.style.hoverStyle}
	${(props) => props.theme.fontStyle.body.large};

	${(props) =>
		!props.active
			? css`
					color: ${props.theme.colorPalette.bw[400]};
					border: 1px solid ${(props) => props.theme.colorPalette.bw[400]};
			  `
			: css`
					color: ${props.theme.color.white};
					background-color: ${props.theme.colorPalette.bw[900]};
			  `};
`;

const Text = styled.p``;

const Tag: React.FC<TagProps> = ({ keyword, id, active = false, onClick, className }) => {
	return (
		<Wrapper id={id} className={className} active={active} event={!!onClick} onClick={onClick}>
			<Text>{keyword}</Text>
		</Wrapper>
	);
};

export default Tag;
