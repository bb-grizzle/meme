import fbAuthChange from "@/lib/firebase/auth/fbAuthChange";
import { initAnalytics } from "@/lib/firebase/client";
import { ReactNode, useEffect } from "react";
import useUser from "../AppProvider/useUser";

interface FirebaseProviderProps {
	children: ReactNode;
}

const FirebaseProvider: React.FC<FirebaseProviderProps> = ({ children }) => {
	const { changeUser, clearUser } = useUser();

	useEffect(() => {
		initAnalytics();
		fbAuthChange({ changeUser, clearUser });
		// eslint-disable-next-line
	}, []);

	return <>{children}</>;
};

export default FirebaseProvider;
