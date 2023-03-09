import { DATA_ERROR } from "@/data/error";
import { DATA_COLLECTION } from "@/data/collection";
import { ResolverReturnType } from "@/types/resolver";
import { ChangedTagType, TagDataClientType } from "@/types/tag";
import { collection, doc, getDoc, getDocs, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { firestore } from "../client";
import { UserDataClientType } from "@/types/user";

type FbUpdateUserType = (props: FbUpdateUserPropsType) => Promise<FbUpdateUserResultType>;

type FbUpdateUserPropsType = {
	uid: string;
	data: Pick<UserDataClientType, "displayName">;
};

type FbUpdateUserResultType = ResolverReturnType & {
	user?: UserDataClientType;
};

const fbUpdateUser: FbUpdateUserType = async ({ data, uid }) => {
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

		// check display name taken
		const userRef = collection(firestore, DATA_COLLECTION.USER);

		// Create a query against the collection.
		const q = query(userRef, where("displayName", "==", data.displayName));
		const querySnapshot = await getDocs(q);
		if (!querySnapshot.empty) {
			return {
				ok: false,
				message: DATA_ERROR.user.displayNameTaken,
			};
		}

		const updateData = { ...data, updatedAt: Timestamp.now() };

		await updateDoc(docRef, updateData);

		const userData = userDoc.data();
		const user = { ...userData, uid, ...updateData } as UserDataClientType;

		return { ok: true, user };
	} catch (error) {
		console.log(error);
		return { ok: false, message: DATA_ERROR.setting.default };
	}
};

export default fbUpdateUser;
