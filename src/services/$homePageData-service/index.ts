import axios, { CancelTokenSource } from "axios";

import {
  THomePageData,
  TSingleHomePageData,
  TSingleHomePageDataId,
} from "../../models/homePageData/types";
import config from "./../../config";

class HomePageDataService {
  private static getHomePageDataUrl() {
    return `${config.api.default}`;
  }
  private static getSingleHomePageDataUrl() {
    return `${config.api.default}single/homepage/data`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getHomePageData(): Promise<any> {
    return new Promise<THomePageData>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .get(HomePageDataService.getHomePageDataUrl(), {
          cancelToken: this.cancelTokenProducts.token,
        })
        .then((data) => resolve(data.data))
        .catch((error) => reject(error));
    });
  }

  public getSingleHomePageData(
    data: TSingleHomePageDataId
  ): Promise<TSingleHomePageData> {
    return new Promise<TSingleHomePageData>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          HomePageDataService.getSingleHomePageDataUrl(),
          {
            id: data.id,
          },
          {
            cancelToken: this.cancelTokenProducts.token,
          }
        )
        .then((data) => resolve(data.data))
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
