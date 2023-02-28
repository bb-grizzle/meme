import useProfileData from "@/provider/ProfileProvider/useProfileData";
import { useCallback } from "react";
import Tag from "../tag";

const ProfileVIew = () => {
	const { profile } = useProfileData();

	const render = useCallback(() => {
		if (profile.loading) {
			return <>loading...</>;
		} else if (profile.error) {
			return <>error...</>;
		} else if (profile.data) {
			return (
				<>
					<p>{profile.data.email}</p>
					<p>{profile.data.isUnique ? "is unique" : `${profile.data.tagCount - 1} same`}</p>
					<ul>
						{profile.data.tags.map((tag) => {
							return <Tag {...tag} key={tag.id} />;
						})}
					</ul>
				</>
			);
		} else {
			return null;
		}
	}, [profile]);

	return render();
};

export default ProfileVIew;
