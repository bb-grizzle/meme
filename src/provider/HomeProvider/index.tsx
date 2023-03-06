import { DataType, DATA_TEMPLATE } from "@/types/data";
import { ChangedTagType, TagDataClientType } from "@/types/tag";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import useInitHomeContext from "./useInitHomeContext";

interface HomeProviderProps {
	children: ReactNode;
}

export type HomeContextProps = {
	tagsState: [DataType<TagDataClientType[]>, Dispatch<SetStateAction<DataType<TagDataClientType[]>>>];
	searchTagsState: [DataType<TagDataClientType[]>, Dispatch<SetStateAction<DataType<TagDataClientType[]>>>];
	changedTagsIdState: [ChangedTagType[], Dispatch<SetStateAction<ChangedTagType[]>>];
	isAllTagsClickState: [boolean, Dispatch<SetStateAction<boolean>>];
};

export const HomeContext = createContext({} as HomeContextProps);

const HomeProvider: React.FC<HomeProviderProps> = ({ children }) => {
	const tagsState = useState<DataType<TagDataClientType[]>>(DATA_TEMPLATE);
	const searchTagsState = useState<DataType<TagDataClientType[]>>(DATA_TEMPLATE);
	const changedTagsIdState = useState<ChangedTagType[]>([]);
	const isAllTagsClickState = useState<boolean>(false);

	const value: HomeContextProps = { tagsState, searchTagsState, changedTagsIdState, isAllTagsClickState };

	useInitHomeContext(value);

	return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
