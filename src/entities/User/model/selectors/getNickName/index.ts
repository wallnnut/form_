import { StateSchema } from "app/providers/storeProvider/config/stateSchema";

export const getNickName = (state: StateSchema) => state.user.nickName;
