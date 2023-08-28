import axios, { CancelTokenSource } from "axios";

import config from "./../../config";
import {
  IChangePasswordSuccessPayload,
  IConfirmAddressEmailSuccessPayload,
  TChangePasswordRequest,
  TConfirmAddressEmailRequest,
} from "../../models/passwordReset/types";
import {
  IResendCodeSignUpSuccessPayload,
  TResendCodeSignUpRequest,
} from "../../models/signUp/types";

class PasswordResetService {
  private static getConfirmAddressEmailUrl() {
    return `${config.api.default}confirm/email`;
  }
  private static getResendCodeUrl() {
    return `${config.api.default}password/reset/resend/code`;
  }
  private static getChangePasswordUrl() {
    return `${config.api.default}password/change`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getConfirmEmailResponse(
    confirmAddressEmailData: TConfirmAddressEmailRequest
  ): Promise<IConfirmAddressEmailSuccessPayload> {
    return new Promise<IConfirmAddressEmailSuccessPayload>(
      (resolve, reject) => {
        this.cancelTokenProducts = axios.CancelToken.source();
        axios
          .post(
            PasswordResetService.getConfirmAddressEmailUrl(),
            {
              email: confirmAddressEmailData.email,
            },
            {
              cancelToken: this.cancelTokenProducts.token,
            }
          )
          .then((data) => resolve(data.data))
          .catch((error) => reject(error));
      }
    );
  }

  public getChangePasswordResponse(
    data: TChangePasswordRequest
  ): Promise<IChangePasswordSuccessPayload> {
    return new Promise<IChangePasswordSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          PasswordResetService.getChangePasswordUrl(),
          {
            token: data.token,
            password: data.password,
            code: data.code,
          },
          {
            cancelToken: this.cancelTokenProducts.token,
          }
        )
        .then((data) => resolve(data.data))
        .catch((error) => reject(error));
    });
  }

  public getResendCodeResponse(
    data: TResendCodeSignUpRequest
  ): Promise<IResendCodeSignUpSuccessPayload> {
    return new Promise<IResendCodeSignUpSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          PasswordResetService.getResendCodeUrl(),
          {
            token: data.token,
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
export default new PasswordResetService();
