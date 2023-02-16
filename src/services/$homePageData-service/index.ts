import axios, { CancelTokenSource } from "axios";

import { IHomePageDataSuccessPayload } from "../../models/homePageData/types";

import config from "./../../config";

class HomePageDataService {
  private static getHomePageDataUrl() {
    return `${config.api.default}`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getHomePageData(): Promise<IHomePageDataSuccessPayload[]> {
    return new Promise<IHomePageDataSuccessPayload[]>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .get(HomePageDataService.getHomePageDataUrl(), {
          cancelToken: this.cancelTokenProducts.token,
        })
        .then((data) => resolve(data.data.data))
        .catch((error) => reject(error));
    });
  }

  public cancelProducts() {
    if (this.cancelTokenProducts) {
      this.cancelTokenProducts.cancel();
      this.cancelTokenProducts = undefined;
    }
  }
}
export default new HomePageDataService();