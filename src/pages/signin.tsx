import SigninForm from "@/components/form/SigninForm";
import Container from "@/components/shared/Container";
import useRedirect from "@/hook/useRedirect";
import PageLayout from "@/layout/PageLayout";
import useUser from "@/provider/AppProvider/useUser";
import { ROUTER } from "@/router";
import styled from "styled-components";

const Text = styled.p`
	${(props) => props.theme.fontStyle.body.large};
	margin-bottom: 20px;
`;

const Signin = () => {
	const { isLogin } = useUser();
	useRedirect({ path: ROUTER.home, condition: isLogin === true });

	return (
		<PageLayout title="Sign In">
			<Container>
				<Text>before start, you need to sign in ...😀 </Text>
				<SigninForm />
			</Container>
		</PageLayout>
	);
};

export default Signin;
