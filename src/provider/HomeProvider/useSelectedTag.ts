import useUser from "@/provider/AppProvider/useUser";
import { HomeContext } from "./index";
import { useContext, useEffect, useState } from "react";
import fbUpdateUserTag from "@/lib/firebase/user/fbUpdateUserTag";

const useSelectedTag = () => {
	const { changedTagsIdState } = useContext(HomeContext);
	const [changedTagsId, setChangedTagsId] = changedTagsIdState;
	const [isChanged, setIsChanged] = useState(false);
	const { uid, updateUserTags } = useUser();

	// STATE
	useEffect(() => {
		setIsChanged(!!changedTagsId.length);
	}, [changedTagsId]);

	// METHOD
	const applyTag = async () => {
		try {
			if (!uid) return;
			const { ok, tags } = await fbUpdateUserTag({ changes: changedTagsId, uid });
			if (ok && tags) {
				updateUserTags(tags);
				setChangedTagsId([]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { isChanged, applyTag, changedTagsId };
};

export default useSelectedTag;
