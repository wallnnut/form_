import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getName = (state: StateSchema) => state.user.name;
