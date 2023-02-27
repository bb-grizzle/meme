import { TagDataClientType } from "./tag";
import { Timestamp } from "firebase/firestore";

export type UserDataType = {
	email: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
	tags: string[];
};

export type UserDataClientType = Omit<UserDataType, "tags"> & {
	uid: string;
	tags: TagDataClientType[];
};
