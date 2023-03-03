import { css } from "styled-components";

export const fontStyle = {
	display: {
		large: css`
			font-size: 57px;
			line-height: 64px;
		`,
		medium: css`
			font-size: 45px;
			line-height: 72px;
		`,
		small: css`
			font-size: 36px;
			line-height: 44px;
		`,
	},
	headline: {
		large: css`
			font-size: 32px;
			line-height: 40px;
		`,
		medium: css`
			font-size: 28px;
			line-height: 36px;
		`,
		small: css`
			font-size: 24px;
			line-height: 32px;
		`,
	},
	title: {
		large: css`
			font-size: 22px;
			line-height: 28px;
		`,
		medium: css`
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			letter-spacing: 0.15px;
		`,
		small: css`
			font-weight: 500;
			font-size: 14px;
			line-height: 20px;
			letter-spacing: 0.1px;
		`,
	},
	label: {
		large: css`
			font-weight: 500;
			font-size: 14px;
			line-height: 20px;
			letter-spacing: 0.1px;
		`,
		medium: css`
			font-weight: 500;
			font-size: 12px;
			line-height: 16px;
			letter-spacing: 0.5px;
		`,
		small: css`
			font-weight: 500;
			font-size: 11px;
			line-height: 16px;
			letter-spacing: 0.5px;
		`,
	},
	body: {
		large: css`
			font-size: 16px;
			line-height: 24px;
			letter-spacing: 0.5px;
		`,
		medium: css`
			font-size: 14px;
			line-height: 20px;
			letter-spacing: 0.25px;
		`,

		small: css`
			font-size: 12px;
			line-height: 16px;
			letter-spacing: 0.4px;
		`,
	},
};
