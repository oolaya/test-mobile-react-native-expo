import axios from "axios";
// import { API_URL, API_KEY } from "@env";

const axiosIntance = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
  timeout: 10000,
});

axiosIntance.interceptors.request.use(
  async (config) => {
    config.headers.set({ "app-id": `624c9429450430b574dcf17c` });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosIntance;
