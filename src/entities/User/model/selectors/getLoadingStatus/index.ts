import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getLoadingStatus = (state: StateSchema) =>
	state.user.loadingStatus;
