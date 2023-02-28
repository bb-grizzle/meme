import Container from "@/components/shared/Container";
import PageLayout from "@/layout/PageLayout";

import styled from "styled-components";

const Text = styled.p`
	${(props) => props.theme.fontStyle.body.large};
`;

const About = () => {
	return (
		<PageLayout title="About">
			<Container>
				<Text>I was wondering how to explain ourselves...😅</Text>
			</Container>
		</PageLayout>
	);
};

export default About;
