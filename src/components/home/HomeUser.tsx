import UserCore from "./UserCore";
import MyTags from "./MyTags";
import styled, { css } from "styled-components";
import useIsUnique from "@/provider/AppProvider/useIsUnique";
import useUser from "@/provider/AppProvider/useUser";
import useMenu from "@/provider/AppProvider/useMenu";
import useHomeTag from "@/provider/HomeProvider/useHomeTag";

const Wrapper = styled.div<{ hide: boolean }>`
	flex-grow: 1;
	${(props) => props.theme.layout.center_flex};
	position: relative;
	padding: 160px 0;
	transform-style: preserve-3d;
	height: 100%;
	${(props) => props.theme.event.disable};

	${(props) =>
		props.hide
			? css`
					opacity: 0;
			  `
			: css`
					opacity: 1;
			  `};
`;

const HomeUser = () => {
	const { user } = useUser();
	const { sharedUser } = useIsUnique();
	const { isMenuClicked } = useMenu();
	const { isAllTagsClick } = useHomeTag();

	return (
		<Wrapper hide={isMenuClicked || isAllTagsClick}>
			{user && <UserCore sharedUser={Number(sharedUser)} name={user.displayName ?? "you"} />}
			<MyTags />
		</Wrapper>
	);
};

export default HomeUser;
