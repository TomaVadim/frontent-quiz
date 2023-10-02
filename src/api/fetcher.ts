import axios from "axios";
import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

const BASE_URL: string = "https:/example.com";

const fetcher = axios.create({
  baseURL: BASE_URL,
});

fetcher.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

fetcher.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
