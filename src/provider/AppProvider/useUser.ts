import { TagDataClientType } from "@/types/tag";
import { AppContext } from ".";
import { useContext, useEffect } from "react";
import { User } from "firebase/auth";
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

	return { isLogin, user, changeUser, clearUser, uid: user?.uid, updateUserTags };
};

export default useUser;
