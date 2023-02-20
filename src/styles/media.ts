export const BREAKPOINT_DESKTOP = 1200;
export const BREAKPOINT_DESKTOP_SMALL = 900;
export const BREAKPOINT_TABLET = 778;
export const BREAKPOINT_MOBILE = 576;

export const customBreakpoints = {
	mobile: BREAKPOINT_MOBILE,
	tablet: BREAKPOINT_TABLET,
	desktop: BREAKPOINT_DESKTOP,
};

const media = {
	mobile: `screen and (max-width: ${BREAKPOINT_MOBILE}px)`,
	tablet: `screen and (max-width: ${BREAKPOINT_TABLET}px)`,
	desktop_small: `screen and (max-width: ${BREAKPOINT_DESKTOP_SMALL}px)`,
	desktop: `screen and (max-width: ${BREAKPOINT_DESKTOP}px)`,
	hover: `screen and (hover: hover)`,
	touch: `(hover: none) and (pointer: coarse)`,
};

export default media;
