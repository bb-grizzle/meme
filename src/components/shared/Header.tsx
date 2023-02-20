import media from "@/styles/media";
import styled from "styled-components";
import Container from "./Container";

const HeaderCompt = styled.header`
	height: ${(props) => props.theme.size.header.pc}px;

	@media ${media.tablet} {
		height: ${(props) => props.theme.size.header.tablet}px;
	}
`;

const Header = () => {
	return (
		<HeaderCompt>
			<Container>
				{/* logo */}
				<p>logo</p>

				{/* nav */}
				<nav>nav</nav>
			</Container>
		</HeaderCompt>
	);
};

export default Header;
