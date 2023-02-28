import SettingForm from "@/components/form/SettingForm";
import Container from "@/components/shared/Container";
import useRedirect from "@/hook/useRedirect";
import PageLayout from "@/layout/PageLayout";
import useUser from "@/provider/AppProvider/useUser";
import { ROUTER } from "@/router";

const setting = () => {
	const { isLogin, user } = useUser();
	useRedirect({ condition: isLogin === false, path: ROUTER.signin });
	return (
		<PageLayout title="Setting">
			<Container>{user && <SettingForm user={user} />}</Container>
		</PageLayout>
	);
};

export default setting;
