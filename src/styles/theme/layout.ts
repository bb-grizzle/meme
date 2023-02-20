import { css } from "styled-components";
import { size } from "./size";

export const layout = {
	full_abs: css`
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	`,
	full_height: css`
		height: 100vh;
		height: ${size.full_height};
	`,
	full_height_with_calc: (calc: string) => `calc(${size.full_height} ${calc})`,
	full_image: (url: string) => css`
		background-image: url("${url}");
		background-size: cover;
		background-position: center;
	`,
	center_flex: css`
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	center_abs: css`
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	`,
	ratio: (ratio: number) => css`
		&:after {
			content: "";
			padding-top: ${ratio ? ratio : 100}%;
			display: block;
		}
	`,
	hideScroll: css`
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	`,
};
