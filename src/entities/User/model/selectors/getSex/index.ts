import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getSex = (state: StateSchema) => state.user.sex;
