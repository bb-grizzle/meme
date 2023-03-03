import fbAuthChange from "@/lib/firebase/auth/fbAuthChange";
import { ReactNode, useEffect } from "react";
import useUser from "../AppProvider/useUser";

interface FirebaseProviderProps {
	children: ReactNode;
}

const FirebaseProvider: React.FC<FirebaseProviderProps> = ({ children }) => {
	const { changeUser, clearUser } = useUser();

	useEffect(() => {
		fbAuthChange({ changeUser, clearUser });
		// eslint-disable-next-line
	}, []);

	return <>{children}</>;
};

export default FirebaseProvider;
