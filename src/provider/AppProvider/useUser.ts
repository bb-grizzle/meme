import { TagDataClientType } from "@/types/tag";
import { AppContext } from ".";
import { useContext, useEffect } from "react";
import { UserDataClientType } from "@/types/user";

const useUser = () => {
	// FIELD
	const { userState, isLoginState } = useContext(AppContext);
	const [user, setUser] = userState;
	const [isLogin, setIsLogin] = isLoginState;

	// STATE
	useEffect(() => {
		if (user !== undefined) {
			if (user) {
				setIsLogin(true);
			} else {
				setIsLogin(false);
			}
		}
	}, [user, setIsLogin]);

	// METHOD
	const changeUser = (user: UserDataClientType) => {
		setUser(user);
	};

	const clearUser = () => {
		setUser(null);
	};

	const updateUserTags = (tags: TagDataClientType[]) => {
		if (!user) return;

		setUser({ ...user, tags });
	};

	const updateUser = (user: UserDataClientType) => {
		setUser((prev) => ({ ...user, tags: prev?.tags ?? [] }));
	};
	const updateUserName = (displayName: string) => {
		setUser((prev) => (prev ? { ...prev, displayName } : prev));
	};

	return { isLogin, user, changeUser, clearUser, uid: user?.uid, updateUserTags, updateUser, updateUserName };
};

export default useUser;
