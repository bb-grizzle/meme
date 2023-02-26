import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AppContext } from ".";
const useMenu = () => {
	const { isMenuClickedState } = useContext(AppContext);
	const [isMenuClicked, setIsMenuClicked] = isMenuClickedState;
	const { pathname } = useRouter();

	useEffect(() => {
		closeMenu();
	}, [pathname]);

	const openMenu = () => setIsMenuClicked(true);
	const closeMenu = () => setIsMenuClicked(false);

	return { isMenuClicked, openMenu, closeMenu };
};

export default useMenu;