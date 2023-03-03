import { css } from "styled-components";

export const event = {
	disable: css`
		user-select: none;
		pointer-events: none;
	`,
	active: css`
		user-select: auto;
		pointer-events: auto;
	`,
};
