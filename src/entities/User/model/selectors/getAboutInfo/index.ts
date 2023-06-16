import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getAboutInfo = (state: StateSchema) => state.user.about;
