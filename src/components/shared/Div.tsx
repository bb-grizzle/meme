import { DivProps } from "@/styles/theme/div";
import styled from "styled-components";

interface DivCompProps extends DivProps {
	className?: string;
}

const Wrapper = styled.div<{ div: DivProps }>`
	${(props) => props.theme.div.default(props.div)};
`;

const Div: React.FC<DivCompProps> = ({ className, ...props }) => {
	return <Wrapper className={className} div={props} />;
};

export default Div;
