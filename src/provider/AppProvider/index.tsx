import { UserDataClientType } from "@/types/user";
import { User } from "firebase/auth";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import useInitAppContext from "./useInitAppContext";

interface AppProviderProps {
	children: ReactNode;
}

export type AppContextProps = {
	isLoginState: [boolean | null, Dispatch<SetStateAction<boolean | null>>];
	userState: [UserDataClientType | null | undefined, Dispatch<SetStateAction<UserDataClientType | null | undefined>>];
	isMenuClickedState: [boolean, Dispatch<SetStateAction<boolean>>];
};

export const AppContext = createContext({} as AppContextProps);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	// FIELD
	const userState = useState<UserDataClientType | null | undefined>(undefined);
	const isLoginState = useState<boolean | null>(null);
	const isMenuClickedState = useState(false);

	// VALUE
	const value: AppContextProps = {
		isLoginState,
		userState,
		isMenuClickedState,
	};

	// INIT
	useInitAppContext(value);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
