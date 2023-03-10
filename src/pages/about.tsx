import Button, { BtnTypeEnum } from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import RandBgText from "@/components/shared/RandBgText";
import PageLayout from "@/layout/PageLayout";
import { useState } from "react";

import styled from "styled-components";

const Text = styled.p`
	${(props) => props.theme.fontStyle.body.large};
	color: ${(props) => props.theme.colorPalette.bw[700]};
	padding: 16px 0;
	line-height: 1.6;
`;

const Small = styled.span`
	${(props) => props.theme.fontStyle.body.medium};
	color: ${(props) => props.theme.colorPalette.bw[400]};
	line-height: 1.5;
	display: inline-block;
	margin-bottom: 12px;
`;

const About = () => {
	const [isEn, setIsEn] = useState(false);

	return (
		<PageLayout title="About">
			<Container>
				{isEn ? (
					<Text>
						<Small>The project was created under the theme of February&apos;s Newzins-OMG during group D-semicolon&apos;s monthly project. </Small>
						<br />
						<RandBgText text="What makes you YOU" /> There are many ways to explain &apos;me&apos;, such as people living in Seoul, designers, and people with scars on their left arm. But We
						don&apos;t know if these words really refer to me. Uncertain.
						<RandBgText text="meme" /> is a website that shows how to express myself uniquely through writing. <br />
						Have fun ! 😀
					</Text>
				) : (
					<Text>
						<Small>D-semicolon의 십이디땀 프로젝트 중 2월 뉴진스-OMG를 주제로 만들어졌습니다. </Small>
						<br />
						<RandBgText text="나를 고유하게 표현할 수 있을까?" /> 서울에 사는 사람, 디자이너, 왼팔에 흉터가 있는 사람 등 나를 설명할 수 있는 방법은 많다. 하지만 이 말들이 정말 나 한명을 지칭하는지는
						확실하지 않다.
						<RandBgText text="meme" /> 는 어떻게 하면 글을 통해 나란 사람을 고유하게 표현할 수 있을지 보여주는 작업물이다. <br />
						즐감 ! 😀
					</Text>
				)}
				<Button iconOption={{ name: "glasses-outline" }} text={`change language to ${isEn ? "KR" : "EN"}`} onClick={() => setIsEn((prev) => !prev)} btnType={BtnTypeEnum.LINE} />
			</Container>
		</PageLayout>
	);
};

export default About;
