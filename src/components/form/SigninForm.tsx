import useInputDefault from "@/hook/useInputDefault";
import fbSendSigninLink from "@/lib/firebase/auth/fbSendSigninLink";
import { FormEvent, useCallback, useEffect, useState } from "react";
import InputText from "../input/InputText";
import Button, { BtnTypeEnum } from "../shared/Button";
import styled from "styled-components";
import RandBgText from "../shared/RandBgText";
import useLoading from "@/hook/useLoading";
import { DATA_ERROR } from "@/data/error";
import media from "@/styles/media";
import fbCheckEmail from "@/lib/firebase/auth/fbCheckEmail";

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
	const pwHook = useInputDefault({ inputOption: { name: "password", placeholder: "type your password", type: "password" } });
	const [isEmailExist, setIsEmailExist] = useState<null | boolean>(null);
	const { startLoading, endLoading, loading } = useLoading();

	const checkEmail = async () => {
		try {
			startLoading();
			if (!emailHook.value) return;
			const { ok, exist, message } = await fbCheckEmail({ email: `${emailHook.value}` });

			if (!ok) {
				// error
				alert(message || DATA_ERROR.signIn.checkUser);
				return;
			}
			if (ok && exist !== undefined) {
				setIsEmailExist(exist);
				return;
			}
		} catch (error) {
			alert(DATA_ERROR.signIn.checkUser);
		} finally {
			endLoading();
		}
	};
	const userSignin = async () => {};
	const userSignUp = async () => {};
	const userFindPw = async () => {};
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		switch (isEmailExist) {
			case null: {
				checkEmail();
				return;
			}
			case true: {
				userSignin();
				return;
			}
			case false: {
				userSignUp();
				return;
			}
			default:
				return;
		}
	};

	const renderBtn = useCallback(() => {
		switch (isEmailExist) {
			case null:
				return (
					<Button
						text="Check Email"
						reverse={true}
						iconOption={{ name: loading ? "ellipsis-horizontal" : "chevron-forward-outline" }}
						btnType={BtnTypeEnum.LINE}
						onClick={checkEmail}
						disabled={loading}
					/>
				);
			case false:
				return (
					<>
						<Button text="Find Password" reverse={true} iconOption={{ name: "key-outline" }} btnType={BtnTypeEnum.LINE} onClick={userFindPw} disabled={loading} />
						<Button text="Sign Up" reverse={true} iconOption={{ name: "add-outline" }} btnType={BtnTypeEnum.LINE} onClick={userSignUp} disabled={loading} />
					</>
				);
			case true:
				return (
					<>
						<Button text="Find Password" reverse={true} iconOption={{ name: "key-outline" }} btnType={BtnTypeEnum.LINE} onClick={userFindPw} disabled={loading} />
						<Button text="Sign In" reverse={true} iconOption={{ name: "airplane-outline" }} btnType={BtnTypeEnum.LINE} onClick={userSignin} disabled={loading} />
					</>
				);
			default:
				return null;
		}
	}, [isEmailExist, loading]);

	return (
		<form onSubmit={onSubmit}>
			<InputText {...emailHook} inputOption={{ ...emailHook.inputOption, disabled: loading }} />
			{isEmailExist !== null && <InputText {...pwHook} inputOption={{ ...pwHook.inputOption, disabled: loading }} />}

			<BtnWrapper>{renderBtn()}</BtnWrapper>
		</form>
	);
};

export default SigninForm;
