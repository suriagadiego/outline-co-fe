// api.ts (or wherever you create the axios instance)
import axios, { AxiosRequestConfig } from "axios";

const apiServerUrl = 'http://127.0.0.1:8000/';
const api = axios.create({
  baseURL: apiServerUrl,
});

const setAuthInterceptor = (accessToken: string) => {
  api.interceptors.request.use((config: any) => {
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  });
};

export { api, setAuthInterceptor };
