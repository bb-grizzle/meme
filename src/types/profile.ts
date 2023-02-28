import { UserDataClientType } from "./user";
export type ProfileDataClientType = UserDataClientType & {
	isUnique: boolean;
	tagCount: number;
};
