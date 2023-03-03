import { useRouter } from "next/navigation";
import { useEffect } from "react";
type UseRedirectProps = {
	condition?: boolean;
	path: string;
};

const useRedirect = ({ condition, path }: UseRedirectProps) => {
	const { push } = useRouter();
	useEffect(() => {
		if (condition === true) {
			push(path);
		}
		// eslint-disable-next-line
	}, [condition, path]);
};

export default useRedirect;
