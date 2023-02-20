import { BREAKPOINT_DESKTOP_SMALL, BREAKPOINT_TABLET } from "@/styles/media";
import { isTouchDevice } from "@/util/isTouchDevice";
import { useState, useEffect } from "react";

const useSize = () => {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});
	const [media, setMedia] = useState({
		isTablet: false,
		isDesktopSmall: false,
	});
	const [isTouch, setIsTouch] = useState(false);

	useEffect(() => {
		const changeMediaState = () => {
			setIsTouch(isTouchDevice());
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		changeMediaState();
		window.addEventListener("resize", changeMediaState);
		return () => window.removeEventListener("resize", changeMediaState);
	}, []);

	useEffect(() => {
		const { width } = size;
		setMedia({
			isTablet: width <= BREAKPOINT_TABLET,
			isDesktopSmall: width <= BREAKPOINT_DESKTOP_SMALL,
		});
	}, [size]);

	return { ...size, ...media, isTouch };
};

export default useSize;
