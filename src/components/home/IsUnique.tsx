import useIsUnique from "@/provider/AppProvider/useIsUnique";
import { useEffect } from "react";

const IsUnique = () => {
	const { sharedUser } = useIsUnique();

	useEffect(() => {
		console.log("sharedUser : ", sharedUser);
	}, [sharedUser]);

	return <>{sharedUser === 1 ? <p>i'm unique!!</p> : <p>there are {sharedUser} more people.</p>}</>;
};

export default IsUnique;
