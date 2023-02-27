export type DataType<T> = {
	error: string;
	loading: boolean;
	data: T | null;
};

export const DATA_TEMPLATE = {
	data: null,
	error: "",
	loading: false,
};
