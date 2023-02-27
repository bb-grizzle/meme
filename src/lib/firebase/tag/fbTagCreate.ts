import { DATA_COLLECTION } from "./../../../data/collection";
import { ResolverReturnType } from "@/types/resolver";
import { addDoc, collection, getDoc, Timestamp } from "firebase/firestore";
import { firestore } from "../client";
import { TagDataClientType } from "@/types/tag";

type FbTagCreateType = (pros: FbTagCreatePropsType) => Promise<FbTagCreateResultType>;

type FbTagCreatePropsType = {
	keyword: string;
};

type FbTagCreateResultType = ResolverReturnType & {
	data?: TagDataClientType;
};

const fbTagCreate: FbTagCreateType = async ({ keyword }) => {
	try {
		const docRef = await addDoc(collection(firestore, DATA_COLLECTION.TAG), {
			keyword,
			createdAt: Timestamp.now(),
			updatedAt: Timestamp.now(),
		});

		const doc = await getDoc(docRef);

		const data = { ...doc.data(), id: doc.id } as TagDataClientType;

		return { ok: true, data };
	} catch (error) {
		console.log(error);
		return { ok: false };
	}
};

export default fbTagCreate;
