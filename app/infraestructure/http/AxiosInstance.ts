import axios from "axios";
import { API_URL, API_KEY } from "@env";

const axiosIntance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

axiosIntance.interceptors.request.use(
  async (config) => {
    config.headers.set({ "app-id": `${API_KEY}` });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosIntance;
