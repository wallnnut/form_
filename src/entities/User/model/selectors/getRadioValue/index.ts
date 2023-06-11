import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getRadioValue = (state: StateSchema) => state.user.radioValue;
