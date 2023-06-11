import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "entities/User/model/slice/userSlice";

export function createReduxStore(initialState: any) {
	return configureStore({
		reducer: { user: userReducer },
		preloadedState: initialState,
	});
}
