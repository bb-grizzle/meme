import { DATA_ERROR } from "@/data/error";
import { DATA_COLLECTION } from "@/data/collection";
import { ResolverReturnType } from "@/types/resolver";
import { ChangedTagType, TagDataClientType } from "@/types/tag";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../client";

type FbUpdateUserType = (props: FbUpdateUserPropsType) => Promise<FbUpdateUserResultType>;

type FbUpdateUserPropsType = {
	changes: ChangedTagType[];
	uid: string;
};

type FbUpdateUserResultType = ResolverReturnType & {
	tags?: TagDataClientType[];
};

const fbUpdateUser: FbUpdateUserType = async ({ changes, uid }) => {
	try {
		// find user
		const docRef = doc(firestore, DATA_COLLECTION.USER, uid);
		const userDoc = await getDoc(docRef);
		if (!userDoc.exists()) {
			return {
				ok: false,
				message: DATA_ERROR.user.exist,
			};
		}

		const originTags: string[] = userDoc.data().tags;
		const tags = changes.reduce((prev, current) => {
			if (current.active) {
				prev = [...prev, current.id];
			} else {
				prev = prev.filter((id) => id !== current.id);
			}
			return prev;
		}, originTags);

		await updateDoc(docRef, { tags });
		const clientTags = await Promise.all(
			tags.map(async (id) => {
				const docRef = doc(firestore, DATA_COLLECTION.TAG, id);
				const tagDoc = await getDoc(docRef);

				const tag = {
					id,
					...tagDoc.data(),
				};
				return tag as TagDataClientType;
			})
		);

		return { ok: true, tags: clientTags };
	} catch (error) {
		return { ok: false };
	}
};

export default fbUpdateUser;
