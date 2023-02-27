import SigninForm from "@/components/form/SigninForm";
import Container from "@/components/shared/Container";
import useRedirect from "@/hook/useRedirect";
import PageLayout from "@/layout/PageLayout";
import useUser from "@/provider/AppProvider/useUser";
import { ROUTER } from "@/router";

const Signin = () => {
	const { isLogin } = useUser();
	useRedirect({ path: ROUTER.home, condition: isLogin === true });

	return (
		<PageLayout title="Sign In">
			<Container>
				<SigninForm />
			</Container>
		</PageLayout>
	);
};

export default Signin;
