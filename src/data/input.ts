export enum ValidationType {
	EMAIL = "email",
}

export const DATA_VALIDATION: { [key: string]: { reg: RegExp; error: string } } = {
	[ValidationType.EMAIL]: {
		reg: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
		error: "이메일을 다시 확인해주세요. 😅",
	},
};
