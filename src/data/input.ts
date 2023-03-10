export enum ValidationType {
	EMAIL = "email",
	PW = "password",
}

export const DATA_VALIDATION: { [key: string]: { reg: RegExp; error: string } } = {
	[ValidationType.EMAIL]: {
		reg: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
		error: "이메일을 다시 확인해주세요. 😅",
	},
	[ValidationType.PW]: {
		reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/,
		error: "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요. 😅",
	},
};
