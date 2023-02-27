import AllTags from "@/components/home/AllTags";
import CheckUnique from "@/components/home/CheckUnique";
import SearchTag from "@/components/home/SearchTag";
import Container from "@/components/shared/Container";
import useRedirect from "@/hook/useRedirect";
import PageLayout from "@/layout/PageLayout";
import useUser from "@/provider/AppProvider/useUser";
import HomeProvider from "@/provider/HomeProvider";
import { ROUTER } from "@/router";

export default function Home() {
	const { isLogin } = useUser();
	useRedirect({ path: ROUTER.signin, condition: isLogin === false });

	return (
		<PageLayout title="Home">
			<HomeProvider>
				<Container>
					<CheckUnique />
					<SearchTag />
					<AllTags />
				</Container>
			</HomeProvider>
		</PageLayout>
	);
}
