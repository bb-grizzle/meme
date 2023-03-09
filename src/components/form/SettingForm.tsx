import useInputDefault from "@/hook/useInputDefault";
import { UserDataClientType } from "@/types/user";
import InputText from "../input/InputText";
import Button, { BtnTypeEnum } from "../shared/Button";
import styled from "styled-components";
import fbUpdateUser from "@/lib/firebase/user/fbUpdateUser";
import useUser from "@/provider/AppProvider/useUser";
import useLoading from "@/hook/useLoading";
import { DATA_MESSAGE } from "@/data/message";
import { DATA_ERROR } from "@/data/error";
const MESSAGE_EMPTY = "* Empty";
interface SettingFormProps {
	user: UserDataClientType;
}

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const Form = styled.form<{ eventDisabled: boolean }>`
	${(props) => (props.eventDisabled ? props.theme.event.disable : props.theme.event.active)};
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const SettingForm: React.FC<SettingFormProps> = ({ user }) => {
	const { updateUser } = useUser();
	const emailHook = useInputDefault({ inputOption: { disabled: true, value: user.email } });
	const nameHook = useInputDefault({ inputOption: { maxLength: 20, placeholder: "your nickname" }, initValue: user.displayName ?? "" });
	const { startLoading, endLoading, loading } = useLoading();

	const onSubmit = async () => {
		try {
			startLoading();
			if (!nameHook.value) {
				nameHook.changeErrorMessage(MESSAGE_EMPTY);
				return;
			}
			if (typeof nameHook.value !== "string") return;
			const {
				ok,
				message,
				user: updatedUser,
			} = await fbUpdateUser({
				uid: user.uid,
				data: {
					displayName: nameHook.value,
				},
			});
			if (!ok) {
				await alert(message ?? DATA_ERROR.setting.changeDisplayName);
				return;
			}
			if (ok && updatedUser) {
				await updateUser(updatedUser);
				await alert(DATA_MESSAGE.setting.success);
				return;
			}
		} catch (error) {
			console.log(error);
			await alert(DATA_ERROR.setting.default);
		} finally {
			endLoading();
		}
	};

	return (
		<Form onSubmit={onSubmit} eventDisabled={loading}>
			<InputText {...emailHook} value={user.email} />
			<InputText {...nameHook} />
			<BtnWrapper>
				<Button
					type="submit"
					text="done"
					iconOption={{ name: loading ? "ellipsis-horizontal" : "checkbox-outline" }}
					btnType={BtnTypeEnum.LINE}
					onClick={onSubmit}
					disabled={loading || nameHook.value === user.displayName}
				/>
			</BtnWrapper>
		</Form>
	);
};

export default SettingForm;
