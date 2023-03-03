import Header from "@/components/shared/Header";
import Menu from "@/components/shared/Menu";
import { ReactNode } from "react";
import styled from "styled-components";

interface AppLayoutProps {
	children?: ReactNode;
}

const Wrapper = styled.div``;

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<Menu />
			{children}
		</Wrapper>
	);
};

export default AppLayout;
