import axios, { CancelTokenSource } from "axios";

import config from "./../../config";
import {
  ICommitSignUpSuccessPayload,
  IResendCodeSignUpSuccessPayload,
  ISignUpSuccessPayload,
  ISignUpTokenSuccessPayload,
  TCommitCodeSignUpRequest,
  TResendCodeSignUpRequest,
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
  private static getCommitCodeSignUpUrl() {
    return `${config.api.default}signUp/commit`;
  }
  private static getResendCodeSignUpUrl() {
    return `${config.api.default}signUp/resend`;
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

  public getCommitCodeSignUp(
    signUpData: TCommitCodeSignUpRequest
  ): Promise<ICommitSignUpSuccessPayload> {
    return new Promise<ICommitSignUpSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          SignUpService.getCommitCodeSignUpUrl(),
          {
            code: signUpData.code,
            token: signUpData.token,
          },
          {
            cancelToken: this.cancelTokenProducts.token,
          }
        )
        .then((data) => resolve(data.data))
        .catch((error) => reject(error));
    });
  }

  public getResendResponse(
    signUpData: TResendCodeSignUpRequest
  ): Promise<IResendCodeSignUpSuccessPayload> {
    return new Promise<IResendCodeSignUpSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          SignUpService.getResendCodeSignUpUrl(),
          {
            token: signUpData.token,
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
