import axios from "axios";
import api from "./config.json";

const instance = axios.create({
	baseURL: api.endPoint,
});

export const userApiMethods = {
	post: async (payload: any) => {
		const { data, status } = await instance.post("", payload);
		return { data, status };
	},
};
