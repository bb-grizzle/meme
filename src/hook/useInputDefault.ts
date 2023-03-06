import { DATA_VALIDATION } from "@/data/input";
import { ChangeEvent, useEffect, useState } from "react";
import { UseInputTextType } from "../types/input/inputText";

const useInputDefault: UseInputTextType = (props) => {
	// FIELD
	const { initValue, validation, inputOption, format } = props;
	const [value, setValue] = useState(initValue);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(validation ? DATA_VALIDATION[validation].error : "");

	// STATE
	useEffect(() => {
		setValue(initValue);
	}, [initValue]);

	// METHOD
	// : on change
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsError(false);
		const newValue = format?.(e.target.value) ?? e.target.value;
		setValue(newValue);
	};

	// : on match
	const checkValidation = () => {
		if (!!value) {
			if (!validation) return true;
			else {
				const format = DATA_VALIDATION[validation].reg;
				const check = !!format.test(value.toString());
				setIsError(!check);
				return check;
			}
		} else {
			if (!inputOption.required) return true;
			return false;
		}
	};

	// : change error message
	const changeErrorMessage = (value: string) => {
		setIsError(true);
		setErrorMessage(value);
	};

	// : clear vluae
	const clear = () => {
		setValue(initValue);
	};

	// RETURN
	return { ...props, value, isError, errorMessage, onChange, checkValidation, changeErrorMessage, clear };
};

export default useInputDefault;
