import AllTags from "@/components/home/AllTags";
import ApplyBtn from "@/components/home/ApplyBtn";
import HomeUser from "@/components/home/HomeUser";
import SearchTag from "@/components/home/SearchTag";
import Container from "@/components/shared/Container";
import useRedirect from "@/hook/useRedirect";
import PageLayout from "@/layout/PageLayout";
import useUser from "@/provider/AppProvider/useUser";
import HomeProvider from "@/provider/HomeProvider";
import { ROUTER } from "@/router";
import { useEffect } from "react";
import styled from "styled-components";

const ContainerCustom = styled(Container)`
	display: flex;
	flex-direction: column;
	height: 100%;
	position: relative;
`;

export default function Home() {
	const { isLogin } = useUser();
	useRedirect({ path: ROUTER.signin, condition: isLogin === false });

	return (
		<PageLayout title="Home">
			<HomeProvider>
				<ContainerCustom>
					<SearchTag />
					<HomeUser />
					<AllTags />
					<ApplyBtn />
				</ContainerCustom>
			</HomeProvider>
		</PageLayout>
	);
}
