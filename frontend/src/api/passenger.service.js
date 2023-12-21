import axios from "axios";
import { BACK_END_URL } from "./constant";

const url = `${BACK_END_URL}/passenger`;

export const createPassenger = (data) => {
    return axios.post(url, data);
};
