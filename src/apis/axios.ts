import axios from 'axios';

const BASE_ENDPOINT_URL = import.meta.env.VITE_ENDPOINT_URL;

export const request = axios.create({
  baseURL: BASE_ENDPOINT_URL,
  timeout: 15000,
});

request.interceptors.request.use(
  (config) => {
    const aT = window.localStorage.getItem('aT');
    if (aT) {
      config.headers.Authorization = `Bearer ${aT}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
