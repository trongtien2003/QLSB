import axios from "axios";
import { BACK_END_URL } from "./constant";

const url = `${BACK_END_URL}/user`;

export const findAllUser = () => {
    return axios.get(url);
};

export const createNewUser = (data) => {
    return axios.post(url, data);
};

export const findOneUser = (id) => {
    return axios.get(`${url}/${id}`);
};

export const updateUser = (id, data) => {
    return axios.patch(`${url}/${id}`, data);
};

export const removeUser = (id) => {
    return axios.delete(`${url}/${id}`);
};

export const registerApi = (data) => {
    return axios.post(url, data);
};
