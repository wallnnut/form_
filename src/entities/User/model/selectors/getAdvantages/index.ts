import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getAdvantages = (state: StateSchema) => state.user.advantages;
