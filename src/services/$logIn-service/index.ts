import axios, { CancelTokenSource } from "axios";

import config from "./../../config";
import {} from "../../models/signUp/types";
import { ILogInSuccessPayload, TLogInRequest } from "../../models/logIn/types";

class LogInService {
  private static getLogInUrl() {
    return `${config.api.default}logIn`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getLogInResponse(
    logInData: TLogInRequest
  ): Promise<ILogInSuccessPayload> {
    return new Promise<ILogInSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          LogInService.getLogInUrl(),
          {
            email: logInData.email,
            password: logInData.password,
            savaLogInDetails: logInData.savaLogInDetails,
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
export default new LogInService();
