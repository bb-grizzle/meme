import { TagDataClientType } from "./../../../types/tag";
import { DATA_COLLECTION } from "./../../../data/collection";
import { DATA_ERROR } from "@/data/error";
import { ResolverReturnType } from "@/types/resolver";
import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "../client";

type FbTagGetType = () => Promise<FbTagGetResultType>;

type FbTagGetResultType = ResolverReturnType & {
	data?: TagDataClientType[];
};

const fbTagGet: FbTagGetType = async () => {
	try {
		const q = query(collection(firestore, DATA_COLLECTION.TAG));
		const querySnapshot = await getDocs(q);
		const data = querySnapshot.docs.map((doc) => {
			const docData = doc.data();
			return {
				id: doc.id,
				...docData,
			};
		}) as TagDataClientType[];

		return {
			ok: true,
			data,
		};
	} catch (error) {
		return {
			ok: false,
			message: DATA_ERROR.tag.default,
		};
	}
};

export default fbTagGet;
