import AllTags from "@/components/home/AllTags";
import ApplyBtn from "@/components/home/ApplyBtn";
import HomeUser from "@/components/home/CheckUnique";
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
					<HomeUser />
					<SearchTag />
					<AllTags />
					<ApplyBtn />
				</Container>
			</HomeProvider>
		</PageLayout>
	);
}
