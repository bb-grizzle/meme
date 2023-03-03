import { ProfileContext } from "./index";
import { useContext } from "react";
const useProfileData = () => {
	const { profileState } = useContext(ProfileContext);
	const [profile] = profileState;

	return { profile };
};

export default useProfileData;
