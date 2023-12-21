import axios from "axios";
import { BACK_END_URL } from "./constant";

const url = `${BACK_END_URL}/province`;

export const findAllProvince = () => {
    return axios.get(url);
};

export const createProvince = (data) => {
    return axios.post(url, data);
};

export const deleteProvince = (id) => {
    return axios.delete(`${url}/${id}`);
};

export const findOneProvince = (id) => {
    return axios.get(`${url}/${id}`);
};

export const updateProvince = (id, data) => {
    return axios.patch(`${url}/${id}`, data);
};
