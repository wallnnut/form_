import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getPhone = (state: StateSchema) => state.user.phone;
