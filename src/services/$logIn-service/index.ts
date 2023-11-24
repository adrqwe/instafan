import axios, { CancelTokenSource } from "axios";

import config from "./../../config";
import {} from "../../models/signUp/types";
import {
  ICheckExistTokenSuccessPayload,
  ILogInSuccessPayload,
  TCheckExistToken,
  TLogInRequest,
} from "../../models/logIn/types";

class LogInService {
  private static getLogInUrl() {
    return `${config.api.default}logIn`;
  }
  private static getCheckExistTokenUrl() {
    return `${config.api.default}check/exist/token`;
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

  public getCheckExistTokenResponse(
    checkExistTokenData: TCheckExistToken
  ): Promise<ICheckExistTokenSuccessPayload> {
    return new Promise<ICheckExistTokenSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          LogInService.getCheckExistTokenUrl(),
          {
            token: checkExistTokenData.token,
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
