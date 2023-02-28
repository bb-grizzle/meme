import UserCore from "./UserCore";
import MyTags from "./MyTags";
import styled from "styled-components";
import useIsUnique from "@/provider/AppProvider/useIsUnique";
import useUser from "@/provider/AppProvider/useUser";

const Wrapper = styled.div`
	flex-grow: 1;
	${(props) => props.theme.layout.center_flex};
	position: relative;
	padding: 160px 0;
	transform-style: preserve-3d;
	height: 100%;
`;

const HomeUser = () => {
	const { user } = useUser();
	const { sharedUser } = useIsUnique();
	return (
		<Wrapper>
			{user && <UserCore sharedUser={Number(sharedUser)} name={user.displayName ?? "you"} />}
			<MyTags />
		</Wrapper>
	);
};

export default HomeUser;
