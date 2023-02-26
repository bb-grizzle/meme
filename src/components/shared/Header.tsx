import media from "@/styles/media";
import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import MenuBtn from "./MenuBtn";

const HeaderComp = styled.header`
	height: ${(props) => props.theme.size.header.pc}px;

	@media ${media.tablet} {
		height: ${(props) => props.theme.size.header.tablet}px;
	}
`;

const ContainerCustom = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Header = () => {
	return (
		<HeaderComp>
			<ContainerCustom>
				<Logo />
				<MenuBtn />
			</ContainerCustom>
		</HeaderComp>
	);
};

export default Header;
