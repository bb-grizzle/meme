import ProfileView from "@/components/profile/ProfileVIew";
import Container from "@/components/shared/Container";
import PageLayout from "@/layout/PageLayout";
import ProfileProvider from "@/provider/ProfileProvider";

const Profile = () => {
	return (
		<PageLayout title="Profile">
			<Container>
				<ProfileProvider>
					<ProfileView />
				</ProfileProvider>
			</Container>
		</PageLayout>
	);
};

export default Profile;
