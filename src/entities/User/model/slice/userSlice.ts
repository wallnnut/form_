import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { MainInfoState, Sex } from "widgets/MainInfo/MainInfo";
import { UserSchema } from "../types/userSchema";
import { nanoid } from "nanoid";
import { userApiMethods } from "entities/User/api";
import { StateSchema } from "app/providers/storeProvider/config/stateSchema";
import { ExtraInfo } from "widgets/AdditionalInfo/AdditionalInfo";
import { AboutState } from "widgets/AboutInfo/AboutInfo";

const initialState: UserSchema = {
	userId: nanoid(),
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
	requestSuceeded: false,
	loadingStatus: "",
	requestError: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		submitPhoneAndEmail: (
			state,
			action: PayloadAction<{ phone: string; email: string }>
		) => {
			const { phone, email } = action.payload;
			state.phone = phone;
			state.email = email;
		},
		submitMainInfo: (state, action: PayloadAction<MainInfoState>) => {
			const { nickName, name, surname, sex } = action.payload;
			state.nickName = nickName;
			state.name = name;
			state.surname = surname;
			state.sex = sex;
		},
		addAdvantage: (state) => {
			const newAdvantage = { name: nanoid() + "advantage", value: "" };
			if (!Array.isArray(state.advantages)) {
				state.advantages = [];
			}
			state.advantages.push(newAdvantage);
		},
		submitExtraInfo: (state, action: PayloadAction<ExtraInfo>) => {
			return { ...state, ...action.payload };
		},
		collectAllData: (state, action: PayloadAction<AboutState>) => {
			state.about = action.payload.about;
		},
		setAdvantage: (
			state,
			action: PayloadAction<{ name: string; value: string }>
		) => {
			const { name } = action.payload;
			state.advantages = state.advantages.map((el) => {
				if (el.name === name) {
					return { ...el, ...action.payload };
				} else {
					return el;
				}
			});
		},
		deleteAdvantage: (
			state,
			action: PayloadAction<{ name: string; value: string }>
		) => {
			const { name } = action.payload;
			state.advantages = state.advantages.filter(
				(el) => el.name !== name
			);
		},
		reset: (state) => {
			state = initialState;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(sendData.pending, (state, action) => {
			state.loadingStatus = action.meta.requestStatus;
		});
		builder.addCase(sendData.fulfilled, (state, action) => {
			state.loadingStatus = action.meta.requestStatus;
			state.requestSuceeded = true;
		});
		builder.addCase(sendData.rejected, (state, action) => {
			state.requestError = action.error.message;
			state.loadingStatus = action.meta.requestStatus;
		});
	},
});

export const sendData = createAsyncThunk<any, void, { state: StateSchema }>(
	"send_data",
	async (data, thunkAPI) => {
		const state = thunkAPI.getState();
		const sendData = Object.entries(state.user).reduce<any>(
			(acc, [name, value]): Record<string, string> => {
				if (
					name !== "loadingStatus" &&
					name !== "requestSuceeded" &&
					name !== "requestError"
				) {
					acc[name] = value;
				}
				return acc;
			},
			{}
		);
		const response = userApiMethods.post(sendData);
		thunkAPI.dispatch(userActions.reset());

		return response;
	}
);

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
