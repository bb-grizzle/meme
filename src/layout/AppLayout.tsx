import Header from "@/components/shared/Header";
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
			{children}
		</Wrapper>
	);
};

export default AppLayout;
