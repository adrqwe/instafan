import axios, { CancelTokenSource } from "axios";
import {
  IProductsSuccessPayload,
  ISingleProductSuccessPayload,
} from "../../models/products/types";
import config from "./../../config";
class ProductsService {
  private static getProductsUrl() {
    return `${config.api.default}products`;
  }
  private static getSingleProductUrl(slug: string) {
    return `${config.api.default}products/${slug}`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getProducts(partner_id: number): Promise<IProductsSuccessPayload[]> {
    return new Promise<IProductsSuccessPayload[]>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .get(ProductsService.getProductsUrl(), {
          cancelToken: this.cancelTokenProducts.token,
          params: {
            partner_id,
          },
        })
        .then((data) => resolve(data.data.data))
        .catch((error) => reject(error));
    });
  }

  public getSingleProduct(slug: string): Promise<ISingleProductSuccessPayload> {
    return new Promise<ISingleProductSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .get(ProductsService.getSingleProductUrl(slug), {
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
export default new ProductsService();
