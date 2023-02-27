import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from ".";
import { useContext } from "react";
import fbIsUnique from "@/lib/firebase/user/fbIsUnique";

const useIsUnique = () => {
	const { userState } = useContext(AppContext);
	const [user] = userState;
	const [sharedUser, setSharedUser] = useState<number | null>(null);

	useEffect(() => {
		checkIsUnique();
	}, [user]);

	const checkIsUnique = async () => {
		try {
			if (!user) return;

			const tagIds = user.tags.map((tag) => tag.id);
			const { ok, count } = await fbIsUnique({ tagIds, uid: user.uid });
			if (ok && typeof count === "number") {
				setSharedUser(count);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { checkIsUnique, sharedUser };
};

export default useIsUnique;
