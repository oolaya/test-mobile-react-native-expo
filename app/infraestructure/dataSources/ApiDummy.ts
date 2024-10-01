import axios from "axios";
import { API_URL, API_KEY } from "@env";
export class ApiDummy<T> {
  constructor() {}

  async get(subPath: string): Promise<T> {
    return await axios.get(`${API_URL}/${subPath}`, {
      headers: { "app-id": `${API_KEY}` },
    });
  }
}
