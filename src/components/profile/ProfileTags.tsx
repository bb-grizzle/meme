import { TagDataClientType } from "@/types/tag";
import TagOrbit from "../tag/TagOrbit";
import styled from "styled-components";

interface ProfileTagsProps {
	tags: TagDataClientType[];
}

const Wrapper = styled.div`
	position: absolute;
	left: 50%;
	left: 50%;
	transform-style: preserve-3d;
`;

const ProfileTags: React.FC<ProfileTagsProps> = ({ tags }) => {
	return (
		<Wrapper>
			{tags.map((tag) => {
				return <TagOrbit text={tag.keyword} key={tag.id} />;
			})}
		</Wrapper>
	);
};

export default ProfileTags;
