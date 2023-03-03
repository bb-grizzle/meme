import media from "@/styles/media";
import { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

const Wrapper = styled.div`
	width: 1024px;
	max-width: 90%;
	margin: auto;
	height: 100%;

	@media ${media.tablet} {
		width: calc(100% - ${(props) => props.theme.size.offset.tablet * 2}px);
	}
`;

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
