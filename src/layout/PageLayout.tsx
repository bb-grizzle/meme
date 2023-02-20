import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";
interface PageLayoutProps {
	children: ReactNode;
	title: string;
}

const Wrapper = styled.div``;

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
	return (
		<Wrapper>
			<Head>
				<title>me?ME! | {title}</title>
			</Head>
			{children}
		</Wrapper>
	);
};

export default PageLayout;
