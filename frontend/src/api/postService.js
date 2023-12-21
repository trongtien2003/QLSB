import axios from "axios";
import { BACK_END_URL } from "./constant";

const url = `${BACK_END_URL}/post`;

export const createPost = (data) => {
    return axios.post(url, data);
};

export const findAllPost = () => {
    return axios.get(url);
};

export const findOnePost = (id) => {
    return axios.get(url + "/" + id);
};

export const updatePost = (id, data) => {
    return axios.patch(`${url}/${id}`, data);
};

export const deletePost = (id) => {
    return axios.delete(`${url}/${id}`);
};

export const findPostByCatId = (catId) => {
    return axios.get(`${url}/findBy/${catId}`);
};
