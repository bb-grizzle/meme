import SigninForm from "@/components/form/SigninForm";
import Container from "@/components/shared/Container";
import PageLayout from "@/layout/PageLayout";

const Signin = () => {
	return (
		<PageLayout title="Sign In">
			<Container>
				<SigninForm />
			</Container>
		</PageLayout>
	);
};

export default Signin;
