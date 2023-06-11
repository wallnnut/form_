import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getCheckboxGroup = (state: StateSchema) =>
	state.user.checkboxGroup;
