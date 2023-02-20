import { User } from "firebase/auth";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import useInitAppContext from "./useInitAppContext";

interface AppProviderProps {
	children: ReactNode;
}

export type AppContextProps = {
	isLoginState: [boolean | null, Dispatch<SetStateAction<boolean | null>>];
	userState: [User | null | undefined, Dispatch<SetStateAction<User | null | undefined>>];
};

export const AppContext = createContext({} as AppContextProps);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	// FIELD
	const userState = useState<User | null | undefined>(undefined);
	const isLoginState = useState<boolean | null>(null);

	// VALUE
	const value: AppContextProps = {
		isLoginState,
		userState,
	};

	// INIT
	useInitAppContext(value);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
