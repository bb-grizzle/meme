import media from "@/styles/media";
import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";
interface PageLayoutProps {
	children: ReactNode;
	title: string;
}

const Main = styled.main`
	padding-top: ${(props) => props.theme.size.header.pc}px;
	height: ${(props) => props.theme.size.full_height};
	@media ${media.tablet} {
		padding-top: ${(props) => props.theme.size.header.tablet}px;
	}
`;

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{`me?ME! | ${title}`}</title>
			</Head>
			<Main>{children}</Main>
		</>
	);
};

export default PageLayout;
