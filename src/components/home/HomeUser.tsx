import UserCore from "./UserCore";
import MyTags from "./MyTags";
import styled from "styled-components";

const Wrapper = styled.div`
	flex-grow: 1;
	${(props) => props.theme.layout.center_flex};
	position: relative;
	padding: 160px 0;
	transform-style: preserve-3d;
	height: 100%;
`;

const HomeUser = () => {
	return (
		<Wrapper>
			<UserCore />
			<MyTags />
		</Wrapper>
	);
};

export default HomeUser;
