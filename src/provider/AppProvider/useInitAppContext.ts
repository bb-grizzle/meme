import { setFullHeight } from "@/util/setFullHeight";
import { useEffect } from "react";
import { AppContextProps } from ".";

const useInitAppContext = (ctx: AppContextProps) => {
	// STATE
	useEffect(() => {
		window.addEventListener("resize", setFullHeight);
		return () => {
			window.removeEventListener("resize", setFullHeight);
		};
	}, []);

	return;
};

export default useInitAppContext;
