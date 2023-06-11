import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Sex } from "widgets/MainInfo/MainInfo";
import { UserSchema } from "../types/userSchema";
import { nanoid } from "nanoid";

const initialState: UserSchema = {
	phone: "",
	email: "",
	nickName: "",
	name: "",
	surname: "",
	sex: Sex.DEFAULT,
	advantages: [
		{ name: nanoid() + "advantage", value: "" },
		{ name: nanoid() + "advantage", value: "" },
		{ name: nanoid() + "advantage", value: "" },
	],
	checkboxGroup: [
		{ name: nanoid() + "checkbox", value: false },
		{ name: nanoid() + "checkbox", value: false },
		{ name: nanoid() + "checkbox", value: false },
	],
	radioValue: "",
	about: "",
	isLoading: true,
	requestSuceeded: false,
	requestFailed: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		submitPhoneAndEmail: (state, action) => {
			state.phone = action.payload.phone;
			state.email = action.payload.email;
		},
		submitMainInfo: (state, action) => {
			state.nickName = action.payload.nickName;
			state.name = action.payload.name;
			state.surname = action.payload.surname;
			state.sex = action.payload.sex;
		},
		addAdvantage: (state) => {
			const newAdvantage = { name: nanoid() + "advantage", value: "" };
			console.log(newAdvantage);
			if (!Array.isArray(state.advantages)) {
				state.advantages = [];
			}
			state.advantages.push(newAdvantage);
		},
		submitExtraInfo: (state, action) => {
			return { ...state, ...action.payload };
		},
		collectAllData: (state, action) => {
			state.about = action.payload;
		},
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
