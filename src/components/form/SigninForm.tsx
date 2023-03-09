import useInputDefault from "@/hook/useInputDefault";
import { FormEvent, useCallback, useEffect, useState } from "react";
import InputText from "../input/InputText";
import Button, { BtnTypeEnum } from "../shared/Button";
import styled from "styled-components";
import useLoading from "@/hook/useLoading";
import { DATA_ERROR } from "@/data/error";
import media from "@/styles/media";
import fbCheckEmail from "@/lib/firebase/auth/fbCheckEmail";
import { ValidationType } from "@/data/input";
import fbSignInWithEmail from "@/lib/firebase/auth/fbSignInWithEmail";
import useUser from "@/provider/AppProvider/useUser";
import fbSignUpWithEmail from "@/lib/firebase/auth/fbSignUpWithEmail";
import fbFindPw from "@/lib/firebase/auth/fbFindPw";

const MESSAGE_EMPTY = "* Empty";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Text = styled.p`
	${(props) => props.theme.fontStyle.body.large};
	margin-bottom: 20px;
`;

const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 8px;

	@media ${media.mobile} {
		flex-direction: column-reverse;
	}
`;

const SigninForm = () => {
	const emailHook = useInputDefault({ initValue: "taeng93@naver.com", inputOption: { name: "email", placeholder: "type your email" }, validation: ValidationType.EMAIL });
	const pwHook = useInputDefault({ initValue: "Dbs279756*", inputOption: { name: "password", placeholder: "type your password", type: "password" }, validation: ValidationType.PW });
	const [isEmailExist, setIsEmailExist] = useState<null | boolean>(null);
	const { startLoading, endLoading, loading } = useLoading();
	const { updateUserName } = useUser();

	// STATE
	useEffect(() => {
		if (isEmailExist !== null) {
			setIsEmailExist(null);
		}
		// eslint-disable-next-line
	}, [emailHook.value]);

	const checkEmail = async () => {
		try {
			if (loading) return;
			if (!emailHook.value) {
				emailHook.changeErrorMessage(MESSAGE_EMPTY);
				return;
			}
			if (!emailHook.checkValidation()) return;
			startLoading();
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

	const userSignin = async () => {
		try {
			startLoading();
			if (loading) return;
			if (!emailHook.value) {
				emailHook.changeErrorMessage(MESSAGE_EMPTY);
				return false;
			}
			if (!emailHook.checkValidation()) return false;
			if (!pwHook.value) {
				pwHook.changeErrorMessage(MESSAGE_EMPTY);
				return false;
			}
			if (!pwHook.checkValidation()) return false;

			const { ok, message, user } = await fbSignInWithEmail({ email: `${emailHook.value}`, password: `${pwHook.value}` });

			if (!ok) {
				alert(message ?? DATA_ERROR.signIn.default);
				return;
			}

			if (ok && user) {
				if (user.displayName) {
					updateUserName(user.displayName);
				}
			}
		} catch (error) {
			alert(DATA_ERROR.signIn.default);
		} finally {
			endLoading();
		}
	};
	const userSignup = async () => {
		try {
			startLoading();
			if (loading) return;
			if (!emailHook.value) {
				emailHook.changeErrorMessage(MESSAGE_EMPTY);
				return false;
			}
			if (!emailHook.checkValidation()) return false;
			if (!pwHook.value) {
				pwHook.changeErrorMessage(MESSAGE_EMPTY);
				return false;
			}
			if (!pwHook.checkValidation()) return false;

			const { ok, message, user } = await fbSignUpWithEmail({ email: `${emailHook.value}`, password: `${pwHook.value}` });

			if (!ok) {
				alert(message ?? DATA_ERROR.signIn.default);
				return;
			}

			if (ok && user) {
				if (user.displayName) {
					updateUserName(user.displayName);
				}
			}
		} catch (error) {
			alert(DATA_ERROR.signIn.default);
		} finally {
			endLoading();
		}
	};

	const userFindPw = async () => {
		try {
			startLoading();
			if (loading) return;
			if (!emailHook.value) {
				emailHook.changeErrorMessage(MESSAGE_EMPTY);
				return false;
			}
			if (!emailHook.checkValidation()) return false;
			const { ok, message } = await fbFindPw({ email: `${emailHook.value}` });
			if (!ok) {
				alert(message ?? DATA_ERROR.findPw.default);
				return;
			}

			alert("이메일일 발송되었습니다... 📮");
		} catch (error) {
			alert(DATA_ERROR.findPw.default);
		} finally {
			endLoading();
		}
	};

	const onSubmit = async (e?: FormEvent<HTMLFormElement>) => {
		e?.preventDefault();
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
				userSignup();
				return;
			}
			default:
				return;
		}
	};

	// RENDER
	// : render btn
	const renderBtn = () => {
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
						<Button text="Sign Up" reverse={true} iconOption={{ name: "add-outline" }} btnType={BtnTypeEnum.LINE} onClick={userSignup} disabled={loading} />
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
	};

	// : render form text
	const renderText = useCallback(() => {
		switch (isEmailExist) {
			case null:
				return <Text>before start, you need to sign in ...😀 </Text>;
			case false:
				return <Text>You don&apos;t have account yet! Plz sign up ...😋 </Text>;
			case true:
				return <Text>You have account already! Type your password ...🤪</Text>;
			default:
				return null;
		}
	}, [isEmailExist]);

	return (
		<>
			{renderText()}
			<Form onSubmit={onSubmit}>
				<InputText {...emailHook} inputOption={{ ...emailHook.inputOption, disabled: loading }} />
				{isEmailExist !== null && <InputText {...pwHook} inputOption={{ ...pwHook.inputOption, disabled: loading }} onEnter={onSubmit} />}

				<BtnWrapper>{renderBtn()}</BtnWrapper>
			</Form>
		</>
	);
};

export default SigninForm;
