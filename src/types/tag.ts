import { Timestamp } from "firebase/firestore";
export type TagDataUploadType = {
	keyword: string;
};

export type TagDataType = TagDataUploadType & {
	id: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};

export type TagDataClientType = TagDataType & {
	active: boolean;
};

export type ChangedTagType = {
	id: string;
	active: boolean;
	keyword: string;
};
