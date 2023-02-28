import useInputDefault from "@/hook/useInputDefault";
import fbSendSigninLink from "@/lib/firebase/auth/fbSendSigninLink";
import { FormEvent, useEffect, useState } from "react";
import InputText from "../input/InputText";
import Button, { BtnTypeEnum } from "../shared/Button";
import styled from "styled-components";
import RandBgText from "../shared/RandBgText";

const Text = styled.p`
	${(props) => props.theme.colorPalette.bw[700]};
	margin-bottom: 24px;
	text-decoration: underline;
`;

const EmailText = styled(RandBgText)``;

const BtnWrapper = styled.div`
	display: flex;
	gap: 8px;
`;

const SigninForm = () => {
	const emailHook = useInputDefault({ inputOption: { name: "email", placeholder: "type your email" } });
	const [isSend, setIsSend] = useState(false);

	useEffect(() => {
		return () => {
			setIsSend(false);
		};
	}, []);

	const back = () => {
		setIsSend(false);
	};

	const sendEmail = async () => {
		if (!emailHook.value) return;
		await fbSendSigninLink({ email: `${emailHook.value}` });
		setIsSend(true);
	};

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		sendEmail();
	};

	return (
		<form onSubmit={onSubmit}>
			{!isSend ? (
				<>
					<InputText {...emailHook} />
					<Button text="send email" iconOption={{ name: "navigate-outline" }} reverse={true} btnType={BtnTypeEnum.LINE} onClick={sendEmail} />
				</>
			) : (
				<>
					<Text>
						check your <EmailText text={`${emailHook.value}`} /> mail box ...📮
					</Text>

					<BtnWrapper>
						<Button text="type another email" iconOption={{ name: "arrow-back" }} reverse={true} btnType={BtnTypeEnum.LINE} onClick={back} />
						<Button text="resend" iconOption={{ name: "refresh" }} reverse={true} btnType={BtnTypeEnum.LINE} onClick={sendEmail} />
					</BtnWrapper>
				</>
			)}
		</form>
	);
};

export default SigninForm;
