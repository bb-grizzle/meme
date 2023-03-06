import { colorPalette } from "@/styles/theme/colorPalette";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface TagOrbitProps {
	text: string;
}

const Wrapper = styled.div`
	font-size: 24px;
	font-weight: 900;
	text-transform: uppercase;
	transform-style: preserve-3d;
	${(props) => props.theme.event.disable};
`;

const animationText = (randX: number, randZ: number, randYInit: number) => keyframes`
  0%{
    transform: perspective(1000px) rotateX(${randX}deg) rotateZ(${randZ}deg) rotateY(${randYInit}deg) rotateY(360deg);
  }
  100%{
    transform: perspective(1000px) rotateX(${randX}deg) rotateZ(${randZ}deg) rotateY(${randYInit}deg) rotateY(0deg);
  }
`;

const Keyword = styled.div<{ randX: number; randZ: number; randYInit: number; duration: number }>`
	transform-style: preserve-3d;
	animation: ${(props) => animationText(props.randX, props.randZ, props.randYInit)} ${(props) => props.duration}s linear infinite;
`;

const Span = styled.span<{ rotateY: number; zSize: number; bgColor: string }>`
	position: absolute;
	left: 0;
	top: 0;
	color: white;
	font-size: 16px;
	background-color: ${(props) => props.bgColor};
	transform-origin: center;
	transform-style: preserve-3d;
	width: 24px;
	height: 32px;
	${(props) => props.theme.layout.center_flex};

	text-align: center;
	transform: rotateY(${(props) => props.rotateY}deg) translateZ(${(props) => props.zSize}px);
	border-top: 2px solid black;
	border-bottom: 2px solid black;
	&:first-child {
		border-left: 2px solid black;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}

	&:last-child {
		border-right: 2px solid black;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}
`;

const Back = styled.span`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.colorPalette.bw[900]};
	transform: translateZ(-1px);
`;

const TagOrbit: React.FC<TagOrbitProps> = ({ text }) => {
	const [zSize] = useState<number>(Math.random() * 40 + 130); // 140 ~ 180
	const [randX] = useState(Math.random() * 90 - 45); //Math.random() * 90 - 45;
	const [randZ] = useState(Math.random() * 180 - 90); //Math.random() * 180 - 90;
	const [randYInit] = useState(Math.random() * 360); //Math.random() * 180 - 90;
	const [duration] = useState(Math.random() * 15 + 5); //5~20
	const [bgColor] = useState(colorPalette.tag.bgColor[Math.floor(Math.random() * colorPalette.tag.bgColor.length)]);

	return (
		<Wrapper>
			<Keyword randX={randX} randZ={randZ} duration={duration} randYInit={randYInit}>
				{text.split("").map((el, index) => {
					return (
						<Span rotateY={8 * index} key={index} zSize={zSize} bgColor={bgColor}>
							{el}
							<Back />
						</Span>
					);
				})}
			</Keyword>
		</Wrapper>
	);
};

export default TagOrbit;
