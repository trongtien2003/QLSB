import axios from "axios";
import { BACK_END_URL } from "./constant";

const url = `${BACK_END_URL}/booking`;

export const createBooking = (data) => {
    return axios.post(url, data);
};

export const findAllBooking = () => {
    return axios.get(url);
};

export const findOneBooking = (id) => {
    return axios.get(`${url}/${id}`);
};

export const updateBooking = (id, data) => {
    return axios.patch(`${url}/${id}`, data);
};

export const deleteBooking = (id) => {
    return axios.delete(`${url}/${id}`);
};

export const sendMail = (data) => {
    return axios.post(`${url}/sendmail`, data);
};

export const verifyMail = (data) => {
    return axios.patch(`${url}/verify`, data);
};
