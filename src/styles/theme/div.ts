import { css } from "styled-components";
import theme from ".";

export type DivProps = {
	color?: string, size?: number, width?: string, dir?: "bottom" | "top" | "left" | "right"
}

export const div = {
	default: ({ color, size, width, dir }: DivProps) => css`
		&:after {
			content: "";
			position: absolute;
			background-color: ${color ? color : theme.color.div};

			${(dir === "top" || dir === "bottom") ? css`
				width: ${width ? width : "100%"};
				height: ${size ? `${size}px` : `1px`};
				`: css`
				height: ${width ? width : "100%"};
				width: ${size ? `${size}px` : `1px`};
			`};

			${() => {
			switch (dir) {
				case "bottom": return css`
					bottom: 0;
					`
				case "top": return css`
					top: 0;
					`
				case "right": return css`
					right: 0;
					`
				case "left": return css`
					left: 0;
					`
			}
		}};
		}
	`,

};
