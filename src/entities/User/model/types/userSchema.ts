import { Sex } from "widgets/MainInfo/MainInfo";

export type Advantage = {
	name: string;
	value: string;
};

export type CheckboxGroup = {
	name: string;
	value: boolean;
};

export interface UserSchema {
	userId: string;
	phone: string;
	email: string;
	nickName: string;
	name: string;
	surname: string;
	sex: Sex;
	advantages: Advantage[];
	checkboxGroup: CheckboxGroup[];
	radioValue: string;
	about: string;
	requestSuceeded: boolean;
	loadingStatus: string;
	requestError: string | undefined;
}
