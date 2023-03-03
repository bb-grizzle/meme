import { activeScroll, preventScroll } from "./../../util/scroll";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AppContext } from ".";
const useMenu = () => {
	const { isMenuClickedState } = useContext(AppContext);
	const [isMenuClicked, setIsMenuClicked] = isMenuClickedState;
	const { pathname } = useRouter();

	useEffect(() => {
		closeMenu();
		// eslint-disable-next-line
	}, [pathname]);

	useEffect(() => {
		if (isMenuClicked) {
			preventScroll();
		} else {
			activeScroll();
		}
	}, [isMenuClicked]);

	const openMenu = () => setIsMenuClicked(true);
	const closeMenu = () => setIsMenuClicked(false);

	return { isMenuClicked, openMenu, closeMenu };
};

export default useMenu;
