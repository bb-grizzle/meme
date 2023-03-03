import { ButtonHTMLAttributes, HTMLAttributes, MouseEvent } from "react";
import styled, { css } from "styled-components";
import { colorPalette } from "@/styles/theme/colorPalette";
import IonIcon from "@reacticons/ionicons";
import IconList from "@reacticons/ionicons/lib/components/iconList.json";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	reverse?: boolean;
	iconOption?: HTMLAttributes<HTMLDivElement> & {
		name: keyof typeof IconList;
		size?: "small" | "large";
	};
	btnType?: BtnTypeEnum;
	mainColor?: string;
}

export enum BtnTypeEnum {
	SOLID,
	LINE,
	TRANSPARENTS,
}

const ButtonWrapper = styled.button<{ btnType: BtnTypeEnum; reverse: boolean; mainColor: string; disabled?: boolean }>`
	padding: 8px 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	gap: 8px;
	${(props) => props.theme.fontStyle.body.medium};
	flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

	${(props) =>
		props.disabled
			? css`
					opacity: 0.3;
					cursor: not-allowed;
			  `
			: css`
					cursor: pointer;
					&:hover {
						opacity: 0.7;
					}
			  `};

	${(props) => {
		switch (props.btnType) {
			case BtnTypeEnum.TRANSPARENTS:
				return css`
					color: ${props.mainColor};
					stroke: ${props.mainColor};
					border: none;
					background-color: ${props.theme.colorPalette.sub.transparents};
				`;
			case BtnTypeEnum.SOLID:
				return css`
					background-color: ${props.mainColor};
					color: ${props.theme.color.white};
					border: none;
					stroke: ${props.theme.color.white};
				`;
			case BtnTypeEnum.LINE:
				return css`
					border: 1px solid ${props.mainColor};
					color: ${props.mainColor};
					stroke: ${props.mainColor};
				`;
		}
	}};
`;

const Text = styled.p``;

const Button: React.FC<ButtonProps> = ({ text, reverse = false, iconOption, btnType = BtnTypeEnum.TRANSPARENTS, mainColor = colorPalette.bw[700], onClick, type = "button", ...rest }) => {
	const onButtonClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
		e.preventDefault();
		onClick?.(e);
	};

	return (
		<ButtonWrapper btnType={btnType} reverse={reverse} mainColor={mainColor} onClick={onButtonClick} type={type} {...rest}>
			{iconOption && <IonIcon {...iconOption} size={"large"} />}
			{text && <Text>{text}</Text>}
		</ButtonWrapper>
	);
};

export default Button;
