import useSize from "@/hook/useSize";

import { setFullHeight } from "@/util/setFullHeight";
import { useEffect } from "react";
import { AppContextProps } from ".";

const useInitAppContext = (ctx: AppContextProps) => {
	// STATE
	const { height } = useSize();

	// : set full height
	useEffect(() => {
		setFullHeight();
	}, [height]);

	return;
};

export default useInitAppContext;
