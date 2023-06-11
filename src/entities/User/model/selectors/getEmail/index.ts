import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getEmail = (state: StateSchema) => state.user.email;
