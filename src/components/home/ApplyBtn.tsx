import useSelectedTag from "@/provider/HomeProvider/useSelectedTag";
import styled, { css } from "styled-components";

const Wrapper = styled.button<{ active: boolean }>`
	position: fixed;
	left: 50%;
	bottom: 64px;
	border: 1px solid ${(props) => props.theme.color.black};
	transition: ${(props) => props.theme.transition.default};
	transition-property: opacity, transform;
	padding: 32px;
	${(props) => props.theme.style.hoverStyle};

	${(props) =>
		!props.active
			? css`
					opacity: 0;
					transform: translateX(-50%) translateY(100%);
			  `
			: css`
					opacity: 1;
					transform: translateX(-50%) translateY(0%);
			  `};
`;

const ApplyBtn = () => {
	const { isChanged, applyTag } = useSelectedTag();

	return (
		<Wrapper active={isChanged} onClick={applyTag}>
			ApplyBtn
		</Wrapper>
	);
};

export default ApplyBtn;
