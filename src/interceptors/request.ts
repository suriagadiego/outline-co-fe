// api.ts (or wherever you create the axios instance)
import axios, { AxiosRequestConfig } from "axios";

const apiServerUrl = 'outline-ecom-be-production.up.railway.app/';
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
