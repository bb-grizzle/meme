import { useState } from "react";
const useLoading = () => {
	const [loading, setLoading] = useState(false);
	const startLoading = () => {
		setLoading(true);
	};
	const endLoading = () => {
		setLoading(false);
	};
	return { startLoading, endLoading, loading };
};

export default useLoading;
