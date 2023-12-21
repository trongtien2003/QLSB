import axios from "axios";
import { BACK_END_URL } from "./constant";

const url = `${BACK_END_URL}/airlines`;

export const createAirline = (data) => {
    return axios.post(url, data);
};

export const findAllAirline = () => {
    return axios.get(url);
};

export const findOneAirline = (id) => {
    return axios.get(`${url}/${id}`);
};

export const updateAirline = (id, data) => {
    return axios.patch(`${url}/${id}`, data);
};

export const deleteAirline = (id) => {
    return axios.delete(`${url}/${id}`);
};
