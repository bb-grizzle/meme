import { colorPalette } from "@/styles/theme/colorPalette";
import { useState } from "react";
import styled from "styled-components";

interface RandBgTextProps {
	text: string;
	className?: string;
}

const Text = styled.span<{ bg: string }>`
	border-radius: 4px;
	color: white;
	font-weight: 100;
	padding: 0 6px;
	${(props) => props.theme.fontStyle.body.large};
	background-color: ${(props) => props.bg};
`;

const RandBgText: React.FC<RandBgTextProps> = ({ text, className }) => {
	const [bg] = useState(colorPalette.tag.bgColor[Math.floor(Math.random() * colorPalette.tag.bgColor.length)]);
	return (
		<Text className={className} bg={bg}>
			{text}
		</Text>
	);
};

export default RandBgText;
