import { DataType, DATA_TEMPLATE } from "@/types/data";
import { ProfileDataClientType } from "@/types/profile";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import useInitProfileContext from "./useInitProfileContext";

interface ProfileProviderProps {
	children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextProps);

export type ProfileContextProps = {
	profileState: [DataType<ProfileDataClientType>, Dispatch<SetStateAction<DataType<ProfileDataClientType>>>];
};

const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
	const profileState = useState<DataType<ProfileDataClientType>>(DATA_TEMPLATE);

	const value: ProfileContextProps = { profileState };

	useInitProfileContext(value);

	return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

export default ProfileProvider;
