import AllTags from "@/components/home/AllTags";
import CheckUnique from "@/components/home/CheckUnique";
import SearchTag from "@/components/home/SearchTag";
import Container from "@/components/shared/Container";
import PageLayout from "@/layout/PageLayout";
import HomeProvider from "@/provider/HomeProvider";

export default function Home() {
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
