import useUser from "@/provider/AppProvider/useUser";
import { useCallback } from "react";
import styled from "styled-components";
import TagOrbit from "../tag/TagOrbit";

const Wrapper = styled.div`
	${(props) => props.theme.layout.center_abs};
	transform-style: preserve-3d;
`;

const MyTags = () => {
	const { user } = useUser();

	const render = useCallback(() => {
		if (!user) return "loading...";
		else if (!user.tags.length) return "there are no tags...";
		else
			return user.tags.map((tag) => {
				return <TagOrbit text={tag.keyword} key={tag.id} />;
			});
	}, [user]);

	return <Wrapper>{render()}</Wrapper>;
};

export default MyTags;
