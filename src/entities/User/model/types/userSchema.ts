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
	isLoading: boolean;
	requestSuceeded: boolean;
	requestFailed: boolean;
}
