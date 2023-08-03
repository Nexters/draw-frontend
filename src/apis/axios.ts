import axios from 'axios';

const BASE_ENDPOINT_URL = import.meta.env.VITE_ENDPOINT_URL;

export const request = axios.create({
  baseURL: BASE_ENDPOINT_URL,
  timeout: 15000,
  //withCredentials: true,
});
