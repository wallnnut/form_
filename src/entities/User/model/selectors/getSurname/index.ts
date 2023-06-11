import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getSurname = (state: StateSchema) => state.user.surname;
