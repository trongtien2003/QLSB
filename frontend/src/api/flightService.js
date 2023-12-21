import axios from "axios";
import { BACK_END_URL } from "./constant";

const url = `${BACK_END_URL}/flight`;

export const createFlight = (data) => {
    return axios.post(url, data);
};

export const findAllFlight = () => {
    return axios.get(url);
};

export const deleteFlight = (id) => {
    return axios.delete(`${url}/${id}`);
};

export const findOneFlight = (id) => {
    return axios.get(`${url}/${id}`);
};

export const updateFlight = (id, data) => {
    return axios.patch(`${url}/${id}`, data);
};

export const findFlightByData = (data) => {
    return axios.post(`${url}/find-flight`, data);
};

export const findFlightByDate = (date) => {
    return axios.get(`${url}/findFlightByDate/${date}`);
};
