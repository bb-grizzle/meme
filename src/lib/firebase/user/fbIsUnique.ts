import { DATA_COLLECTION } from "@/data/collection";
import { ResolverReturnType } from "@/types/resolver";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../client";

type FbIsUniqueType = (props: FbIsUniquePropsType) => Promise<FbIsUniqueResultType>;

type FbIsUniquePropsType = {
	uid: string;
	tagIds: string[];
};

type FbIsUniqueResultType = ResolverReturnType & {
	count?: number;
};

const fbIsUnique: FbIsUniqueType = async ({ uid, tagIds }) => {
	try {
		const q = query(collection(firestore, DATA_COLLECTION.USER), where("tags", "in", [tagIds]));
		const querySnapshot = await getDocs(q);
		const count = querySnapshot.size;

		return { ok: true, count };
	} catch (error) {
		return { ok: false };
	}
};

export default fbIsUnique;
