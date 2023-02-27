import { HomeContext } from "./index";
import { useContext } from "react";
import fbTagGet from "@/lib/firebase/tag/fbTagGet";

const useHomeTag = () => {
	// FIELD
	const { tagsState } = useContext(HomeContext);
	const [tags] = tagsState;

	// STATE

	// METHOD

	return { tags };
};

export default useHomeTag;
