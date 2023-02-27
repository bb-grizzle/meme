import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";
interface PageLayoutProps {
	children: ReactNode;
	title: string;
}

const Main = styled.main``;

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
