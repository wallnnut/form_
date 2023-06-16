import React, { FC } from "react";
import { Provider, useDispatch } from "react-redux";
import { createReduxStore } from "../config/store";

export interface IStoreProvider {
	children: React.ReactNode;
	initialState: any;
}

export const store = createReduxStore({});

const StoreProvider: FC<IStoreProvider> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
