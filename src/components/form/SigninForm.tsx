import useInputDefault from "@/hook/useInputDefault";
import fbSendSigninLink from "@/lib/firebase/auth/fbSendSigninLink";
import { FormEvent } from "react";
import InputText from "../input/InputText";
import Button, { BtnTypeEnum } from "../shared/Button";

const SigninForm = () => {
	const emailHook = useInputDefault({ inputOption: { name: "email", placeholder: "type your email" } });

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!emailHook.value) return;
		await fbSendSigninLink({ email: `${emailHook.value}` });
	};

	return (
		<form onSubmit={onSubmit}>
			<InputText {...emailHook} />
			<Button text="send email" iconOption={{ name: "navigate-outline" }} reverse={true} btnType={BtnTypeEnum.LINE} />
		</form>
	);
};

export default SigninForm;
