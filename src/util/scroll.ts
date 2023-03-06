import theme from "@/styles/theme";

export const preventScroll = () => {
	document.body.style.height = theme.size.full_height;
	document.body.style.overflow = "hidden";
};

export const activeScroll = () => {
	document.body.style.height = "auto";
	document.body.style.overflow = "auto";
};

export const scrollToTarget = (dom: HTMLDivElement | HTMLUListElement, option: ScrollToOptions) => {
	dom.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
		...option,
	});
};

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
