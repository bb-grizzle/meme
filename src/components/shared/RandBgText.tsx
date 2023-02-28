import styled from "styled-components";

interface RandBgTextProps {
	text: string;
	className?: string;
}

const Text = styled.span`
	border-radius: 4px;
	color: white;
	font-weight: 100;
	padding: 0 6px;
	${(props) => props.theme.fontStyle.body.large};
	background-color: ${(props) => props.theme.colorPalette.tag.bgColor[Math.floor(Math.random() * props.theme.colorPalette.tag.bgColor.length)]};
`;

const RandBgText: React.FC<RandBgTextProps> = ({ text, className }) => {
	return <Text className={className}>{text}</Text>;
};

export default RandBgText;
