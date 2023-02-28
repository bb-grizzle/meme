import useProfileData from "@/provider/ProfileProvider/useProfileData";
import { useCallback } from "react";
import UserCore from "../home/UserCore";
import ProfileTags from "./ProfileTags";

import styled from "styled-components";

const Wrapper = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 64px;
`;

const TagWrapper = styled.div`
	${(props) => props.theme.layout.center_flex};
	transform-style: preserve-3d;
	flex-grow: 1;
`;

const Name = styled.p`
	border: 1px solid ${(props) => props.theme.colorPalette.bw[900]};
	padding: 8px 16px;
	border-radius: 8px;
`;

const ProfileView = () => {
	const { profile } = useProfileData();

	const render = useCallback(() => {
		if (profile.loading) {
			return <>loading...</>;
		} else if (profile.error) {
			return <>error...</>;
		} else if (profile.data) {
			return (
				<Wrapper>
					{/* <Name>{profile.data.email}</Name> */}
					<TagWrapper>
						<UserCore sharedUser={profile.data.tagCount} name={profile.data.email} />
						<ProfileTags tags={profile.data.tags} />
					</TagWrapper>
				</Wrapper>
			);
		} else {
			return null;
		}
	}, [profile]);

	return render();
};

export default ProfileView;
