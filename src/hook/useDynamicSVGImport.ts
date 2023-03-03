import { useEffect, useRef, useState } from "react";

export function useDynamicSVGImport(name: string) {
	const [nowName, setNowName] = useState(name);
	const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error>();

	useEffect(() => {
		setNowName(name);
	}, [name]);

	useEffect(() => {
		const getIcon = async () => {
			try {
				setLoading(true);
				setError(undefined);
				ImportedIconRef.current = (await import(`@/asset/${nowName}.svg`)).default;
			} catch (error: any) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		getIcon();
	}, [nowName]);

	return { error, loading, SvgIcon: ImportedIconRef.current };
}
