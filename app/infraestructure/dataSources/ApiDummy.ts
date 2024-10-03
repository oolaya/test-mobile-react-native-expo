import axiosInstance from "./../http/AxiosInstance";
import { API_URL, API_KEY } from "@env";
export class ApiDummy<T> {
  constructor() {}

  async get(subPath: string): Promise<T> {
    return await axiosInstance.get(`/${subPath}`);
  }
}
