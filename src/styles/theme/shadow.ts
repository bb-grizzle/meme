import { css } from "styled-components";

export const shadow = {
	postit: css`
		filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
	`,
	popup: css`
		filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15));
	`,
	sticker: {
		default: css`
			filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
		`,
		active: css`
			filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.3));
		`,
		unactive: css``,
		dragging: css`
			filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.3));
		`,
	},
};
