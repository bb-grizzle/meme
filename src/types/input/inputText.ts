import { ValidationType } from "@/data/input";
import { ChangeEvent, HTMLProps, InputHTMLAttributes } from "react";

export type UseInputTextType = (props: UseInputTextProps) => UseInputTextResult;

type ValueType = string | number | undefined;

export type UseInputTextProps = {
	inputOption: InputHTMLAttributes<HTMLInputElement>;
	label?: string;
	note?: string;
	initValue?: ValueType;
	onEnter?: () => void;
	validation?: ValidationType;
};

export type UseInputTextResult = UseInputTextProps & {
	value: ValueType;
	isError: boolean;
	errorMessage?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	changeErrorMessage: (value: string) => void;
	checkValidation: () => boolean;
	clear: () => void;
};
