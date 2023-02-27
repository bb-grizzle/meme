import { AppContext } from ".";
import { useContext, useEffect } from "react";
import { User } from "firebase/auth";

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
	const changeUser = (user: User) => {
		setUser(user);
	};

	const clearUser = () => {
		setUser(null);
	};

	return { isLogin, user, changeUser, clearUser, uid: user?.uid };
};

export default useUser;
