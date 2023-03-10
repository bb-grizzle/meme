import { UseInputTextResult } from "@/types/input/inputText";
import { KeyboardEvent } from "react";
import styled, { css } from "styled-components";
import Div from "../shared/Div";

export interface InputTextProps extends UseInputTextResult {
	className?: string;
}

const Wrapper = styled.label``;

const Label = styled.p`
	margin-bottom: 4px;
	font-weight: 500;
	font-size: 13px;
	color: ${(props) => props.theme.colorPalette.bw[900]};
`;

const InputWrapper = styled.div`
	position: relative;
`;

const Input = styled.input`
	${(props) => props.theme.fontStyle.body.large};
	padding: 8px 16px;
	border: 1px solid ${(props) => props.theme.colorPalette.bw[700]};
	border-radius: 999px;
	appearance: none;
`;

const NoteWrapper = styled.div`
	margin-top: 8px;
	padding: 0 16px;
`;

const Note = styled.p<{ isError: boolean }>`
	${(props) => props.theme.fontStyle.body.small};
	color: ${(props) => (props.isError ? props.theme.colorPalette.sub.warn : props.theme.colorPalette.bw[400])};
`;

const InputText: React.FC<InputTextProps> = ({ label, note, isError, errorMessage, value = "", onChange, inputOption, className, onEnter }) => {
	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		inputOption.onKeyDown?.(e);

		if (e.key === "Enter" && !!onEnter) {
			onEnter();
		}
	};

	return (
		<Wrapper className={className}>
			{/* label */}
			{label && <Label>{label}</Label>}
			{/* input */}
			<InputWrapper>
				<Input {...inputOption} onChange={onChange} value={value} onKeyDown={onKeyDown} />
				{/* <DivCustom dir={"bottom"} isError={isError} /> */}
			</InputWrapper>

			{/* note */}
			{note && (
				<NoteWrapper>
					<Note className="input-note-text" isError={false}>
						{note}
					</Note>
				</NoteWrapper>
			)}

			{/* error */}
			{isError && (
				<NoteWrapper>
					<Note className="input-error-text" isError={true}>
						{errorMessage}
					</Note>
				</NoteWrapper>
			)}
		</Wrapper>
	);
};

export default InputText;
