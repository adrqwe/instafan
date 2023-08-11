import axios, { CancelTokenSource } from "axios";

import config from "./../../config";
import {
  ISignUpSuccessPayload,
  ISignUpTokenSuccessPayload,
  TSignUpRequest,
  TSignUpRequestWithBirthday,
} from "../../models/signUp/types";

class SignUpService {
  private static getSignUpCheckUrl() {
    return `${config.api.default}signUp/check`;
  }
  private static getSignUpUrl() {
    return `${config.api.default}signUp`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getSignUpResponse(
    signUpData: TSignUpRequest
  ): Promise<ISignUpSuccessPayload> {
    return new Promise<ISignUpSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          SignUpService.getSignUpCheckUrl(),
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

  public getSignUpAuthToken(
    signUpData: TSignUpRequestWithBirthday
  ): Promise<ISignUpTokenSuccessPayload> {
    return new Promise<ISignUpTokenSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          SignUpService.getSignUpUrl(),
          {
            email: signUpData.email,
            fullName: signUpData.fullName,
            username: signUpData.username,
            password: signUpData.password,
            birthday: signUpData.birthday,
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
