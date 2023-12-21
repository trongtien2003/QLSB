import axios from "axios";
import { BACK_END_URL } from "./constant";

const url = `${BACK_END_URL}/booking`;

export const findByEmail = (seatId) => {
    const urls = `${url}/find-by-seatId/${seatId}`;
    return axios.get(urls);
};
