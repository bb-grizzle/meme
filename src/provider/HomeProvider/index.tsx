import { DataType, DATA_TEMPLATE } from "@/types/data";
import { TagDataClientType } from "@/types/tag";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import useInitHomeContext from "./useInitHomeContext";

interface HomeProviderProps {
	children: ReactNode;
}

export type HomeContextProps = {
	tagsState: [DataType<TagDataClientType[]>, Dispatch<SetStateAction<DataType<TagDataClientType[]>>>];
	searchTagsState: [DataType<TagDataClientType[]>, Dispatch<SetStateAction<DataType<TagDataClientType[]>>>];
};

export const HomeContext = createContext({} as HomeContextProps);

const HomeProvider: React.FC<HomeProviderProps> = ({ children }) => {
	const tagsState = useState<DataType<TagDataClientType[]>>(DATA_TEMPLATE);
	const searchTagsState = useState<DataType<TagDataClientType[]>>(DATA_TEMPLATE);

	const value: HomeContextProps = { tagsState, searchTagsState };

	useInitHomeContext(value);

	return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
