import useInputDefault from "@/hook/useInputDefault";
import fbSendSigninLink from "@/lib/firebase/auth/fbSendSigninLink";
import { FormEvent, useEffect, useState } from "react";
import InputText from "../input/InputText";
import Button, { BtnTypeEnum } from "../shared/Button";
import styled from "styled-components";
import RandBgText from "../shared/RandBgText";
import useLoading from "@/hook/useLoading";
import { DATA_ERROR } from "@/data/error";
import media from "@/styles/media";

const Text = styled.p`
	${(props) => props.theme.colorPalette.bw[700]};
	margin-bottom: 24px;
`;

const EmailText = styled(RandBgText)``;

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 8px;

	@media ${media.mobile} {
		flex-direction: column;
	}
`;

const SigninForm = () => {
	const emailHook = useInputDefault({ inputOption: { name: "email", placeholder: "type your email" } });
	const [isSend, setIsSend] = useState(false);
	const { startLoading, endLoading, loading } = useLoading();

	useEffect(() => {
		return () => {
			setIsSend(false);
		};
	}, []);

	const back = () => {
		emailHook.clear();
		setIsSend(false);
	};

	const sendEmail = async () => {
		startLoading();
		try {
			if (!emailHook.value) return;
			const { ok, message } = await fbSendSigninLink({ email: `${emailHook.value}` });
			if (!ok) {
				alert(message ?? DATA_ERROR.signIn.default);
				return;
			} else {
				setIsSend(true);
			}
		} catch (error) {
			alert(DATA_ERROR.signIn.default);
		} finally {
			endLoading();
		}
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
					<BtnWrapper>
						<Button text="send email" iconOption={{ name: "navigate-outline" }} reverse={true} btnType={BtnTypeEnum.LINE} onClick={sendEmail} disabled={loading} />
					</BtnWrapper>
				</>
			) : (
				<>
					<Text>
						check your <EmailText text={`${emailHook.value}`} /> mail box ...📮
					</Text>

					<BtnWrapper>
						<Button text="type another email" iconOption={{ name: "arrow-back" }} reverse={false} btnType={BtnTypeEnum.LINE} onClick={back} />
						<Button text="resend" iconOption={{ name: "refresh" }} reverse={false} btnType={BtnTypeEnum.LINE} onClick={sendEmail} disabled={loading} />
					</BtnWrapper>
				</>
			)}
		</form>
	);
};

export default SigninForm;
