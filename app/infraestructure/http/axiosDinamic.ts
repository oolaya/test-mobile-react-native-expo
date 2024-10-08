import axios from "axios";

export class AxiosDinamic {
  readonly axiosI = axios;
  constructor(urlBase: string) {
    this.getAxiosInstace(urlBase);
  }

  private getAxiosInstace(UrlBase: string) {
    this.axiosI.create({
      baseURL: UrlBase,
      timeout: 10000,
    });
    return this.axiosI;
  }
}
