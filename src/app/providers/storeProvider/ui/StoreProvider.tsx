import React, { FC } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

export interface IStoreProvider {
	children: React.ReactNode;
	initialState: any;
}

const StoreProvider: FC<IStoreProvider> = ({ initialState, children }) => {
	const store = createReduxStore(initialState);
	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
