import axios, { CancelTokenSource } from "axios";

import config from "./../../config";
import { TSignUpRequest } from "../../models/signUp/types";

class SignUpService {
  private static getSignUpUrl() {
    return `${config.api.default}signUp`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getSignUpResponse(signUpData: TSignUpRequest): Promise<any> {
    return new Promise<TSignUpRequest>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          SignUpService.getSignUpUrl(),
          {
            email: signUpData.email,
            fullName: signUpData.fullName,
            username: signUpData.username,
            password: signUpData.password,
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
export default new SignUpService();
