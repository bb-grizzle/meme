import fbSignout from "@/lib/firebase/auth/fbSignout";
import useMenu from "@/provider/AppProvider/useMenu";
import useUser from "@/provider/AppProvider/useUser";
import { ROUTER } from "@/router";
import media from "@/styles/media";
import IonIcon from "@reacticons/ionicons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
	${(props) => props.theme.layout.full_abs};
	position: fixed;
	z-index: ${(props) => props.theme.zIndex.menu};
`;

const Dim = styled.div`
	background-color: ${(props) => props.theme.colorPalette.sub.dim};
	${(props) => props.theme.layout.full_abs};
`;

const MenuWrapper = styled.div`
	position: absolute;
	background-color: ${(props) => props.theme.color.white};
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 5;
	border-radius: 8px 0 0 8px;
	width: 320px;
	padding: 16px;
	padding-top: 0;
	padding-bottom: 32px;
	display: flex;
	flex-direction: column;

	@media ${media.tablet} {
		width: 100%;
		border-radius: 0;
	}
`;

const Top = styled.div`
	height: ${(props) => props.theme.size.header.pc}px;
	align-items: center;
	justify-content: flex-start;
	display: flex;
	padding: 8px;
`;

const CloseBtn = styled(IonIcon)`
	${(props) => props.theme.style.hoverStyle};
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const LinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-grow: 1;
`;

const LinkCustom = styled(Link)`
	${(props) => props.theme.style.hoverStyle};
	padding: 16px;
	border-radius: 4px;
	text-transform: capitalize;
	&:hover {
		background-color: ${(props) => props.theme.colorPalette.bw[100]};
	}
`;

const Menu = () => {
	const { isMenuClicked, closeMenu } = useMenu();
	const { isLogin } = useUser();
	const { push } = useRouter();

	return isMenuClicked ? (
		<Wrapper>
			<Dim />
			<MenuWrapper>
				<Top>
					<CloseBtn name="close" onClick={closeMenu} size="large" />
				</Top>
				<Nav>
					<LinkWrapper>
						<LinkCustom href={ROUTER.home}>home</LinkCustom>
						<LinkCustom href={ROUTER.about}>about</LinkCustom>
						<LinkCustom href={ROUTER.setting}>setting</LinkCustom>
					</LinkWrapper>
					{isLogin === true ? <Button text="logout" onClick={fbSignout} /> : <Button text="signin" onClick={() => push(ROUTER.signin)} />}
				</Nav>
			</MenuWrapper>
		</Wrapper>
	) : null;
};

export default Menu;
