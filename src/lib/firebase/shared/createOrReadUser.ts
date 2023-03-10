import { DATA_COLLECTION } from "@/data/collection";
import { DATA_ERROR } from "@/data/error";
import { UserDataClientType } from "@/types/user";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { firestore } from "../client";

type CreateOrReadUserType = (props: User) => Promise<{
	user: UserDataClientType;
}>;

const createOrReadUser: CreateOrReadUserType = async ({ uid, email }) => {
	const userDoc = await getDoc(doc(firestore, DATA_COLLECTION.USER, uid));
	let user = {} as UserDataClientType;

	if (!email) throw new Error(DATA_ERROR.normal.default);

	if (!userDoc.exists()) {
		const userUpload = { email, tags: [], createdAt: Timestamp.now(), updatedAt: Timestamp.now(), displayName: email.split("@")[0] };
		await setDoc(doc(firestore, DATA_COLLECTION.USER, uid), userUpload);
		user = { ...userUpload, uid: uid };
	} else {
		const userData = userDoc.data();
		const tags = await Promise.all(
			userData.tags.map(async (tagId: string) => {
				const tagDoc = await getDoc(doc(firestore, DATA_COLLECTION.TAG, tagId));
				return { id: tagDoc.id, ...tagDoc.data() };
			})
		);
		user = { ...userData, uid: uid, tags } as UserDataClientType;
	}
	return { user };
};

export default createOrReadUser;
