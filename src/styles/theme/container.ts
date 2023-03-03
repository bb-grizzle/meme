import { css } from "styled-components";
import media from "../media";

export const container = {
	default: css`
		width: ${(props) => props.theme.size.container.pc};
		margin: auto;
		max-width: 1200px;
		height: 100%;

		@media ${media.tablet} {
			max-width: initial;
			width: calc(100% - ${16 * 2}px);
		}
	`,

	header: css`
		padding: 32px 36px;
		@media ${media.tablet} {
			padding: 22px 20px;
		}
	`,
};
