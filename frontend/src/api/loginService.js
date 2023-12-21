import axios from "axios";
import { BACK_END_URL } from "./constant";

const url = `${BACK_END_URL}/login`;

export const loginApi = (data) => {
    return axios.post(url, data);
};
