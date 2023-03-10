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
						Have fun ! π
					</Text>
				) : (
					<Text>
						<Small>D-semicolonμ μ­μ΄λλ νλ‘μ νΈ μ€ 2μ λ΄μ§μ€-OMGλ₯Ό μ£Όμ λ‘ λ§λ€μ΄μ‘μ΅λλ€. </Small>
						<br />
						<RandBgText text="λλ₯Ό κ³ μ νκ² ννν  μ μμκΉ?" /> μμΈμ μ¬λ μ¬λ, λμμ΄λ, μΌνμ νν°κ° μλ μ¬λ λ± λλ₯Ό μ€λͺν  μ μλ λ°©λ²μ λ§λ€. νμ§λ§ μ΄ λ§λ€μ΄ μ λ§ λ νλͺμ μ§μΉ­νλμ§λ
						νμ€νμ§ μλ€.
						<RandBgText text="meme" /> λ μ΄λ»κ² νλ©΄ κΈμ ν΅ν΄ λλ μ¬λμ κ³ μ νκ² ννν  μ μμμ§ λ³΄μ¬μ£Όλ μμλ¬Όμ΄λ€. <br />
						μ¦κ° ! π
					</Text>
				)}
				<Button iconOption={{ name: "glasses-outline" }} text={`change language to ${isEn ? "KR" : "EN"}`} onClick={() => setIsEn((prev) => !prev)} btnType={BtnTypeEnum.LINE} />
			</Container>
		</PageLayout>
	);
};

export default About;
