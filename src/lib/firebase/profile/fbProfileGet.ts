import { UserDataClientType } from "./../../../types/user";
import { DATA_COLLECTION } from "./../../../data/collection";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { DATA_ERROR } from "@/data/error";
import { ResolverReturnType } from "@/types/resolver";
import { firestore } from "../client";
import { ProfileDataClientType } from "@/types/profile";
type FbProfileGetType = (props: FbProfileGetPropsType) => Promise<FbProfileGetResultType>;

type FbProfileGetPropsType = {
	id: string;
};
type FbProfileGetResultType = ResolverReturnType & {
	data?: ProfileDataClientType;
};

const fbProfileGet: FbProfileGetType = async ({ id }) => {
	try {
		const docData = await getDoc(doc(firestore, DATA_COLLECTION.USER, id));
		if (!docData.exists()) {
			return {
				ok: false,
				message: DATA_ERROR.profile.exist,
			};
		}

		const tags = await Promise.all(
			docData.data().tags.map(async (tagId: string) => {
				const tagDoc = await getDoc(doc(firestore, DATA_COLLECTION.TAG, tagId));
				return { id: tagDoc.id, ...tagDoc.data() };
			})
		);

		const q = query(collection(firestore, DATA_COLLECTION.USER), where("tags", "in", [docData.data().tags]));
		const querySnapshot = await getDocs(q);
		const tagCount = querySnapshot.size;

		const data = { ...docData.data(), uid: docData.id, tags, isUnique: tagCount === 1, tagCount } as ProfileDataClientType;
		return {
			ok: true,
			data,
		};
	} catch (error) {
		console.log(error);
		return { ok: false, message: DATA_ERROR.profile.default };
	}
};

export default fbProfileGet;
