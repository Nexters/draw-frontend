import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig, isAxiosError } from 'axios';
import { userApi } from './handlers/user';

const BASE_ENDPOINT_URL = import.meta.env.VITE_ENDPOINT_URL;
type CustomError = { code: number; message: string };

export const request = axios.create({
  baseURL: BASE_ENDPOINT_URL,
  timeout: 15000,
});

request.interceptors.request.use(
  /*  async (config) => {
    const aT = window.localStorage.getItem('aT');
    const rT = window.localStorage.getItem('rT');

    if (rT && aT) {
      const data = await userApi.postRefresh({ refreshToken: rT, accessToken: aT });
      console.log(data);
      if (data) {
        window.localStorage.setItem('aT', data?.accessToken);
        window.localStorage.setItem('rT', data?.refreshToken);
        config.headers.Authorization = `Bearer ${data?.accessToken}`;
      }
    }
    return config;
  }, */
  (config) => {
    const aT = window.localStorage.getItem('aT');
    if (aT) {
      config.headers.Authorization = `Bearer ${aT}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error.response)
);

request.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (!isAxiosError(error)) return Promise.reject(error);

    const { code } = error.response?.data as CustomError;
    const origin = error.config as AxiosRequestConfig;

    if (code === 40110) {
      const aT = window.localStorage.getItem('aT');
      const rT = window.localStorage.getItem('rT');

      if (aT && rT) {
        try {
          const data = await userApi.postRefresh({ refreshToken: rT, accessToken: aT });
          data && (origin.headers as AxiosHeaders).set('Authorization', `Bearer ${data.accessToken}`);
          window.localStorage.setItem('aT', data.accessToken);
          window.localStorage.setItem('rT', data.refreshToken);
          return axios(origin);
        } catch (error) {
          window.localStorage.removeItem('aT');
          window.localStorage.removeItem('rT');
          window.location.href = '/login?expired=true';
        }
      }
    }
    return Promise.reject(error.response);
  }
);
