import { ActionType } from "typesafe-actions";

import * as actions from "./../actions";
import { IResendCodeSignUpSuccessPayload } from "../../signUp/types";

export type IAction = ActionType<typeof actions>;

export interface IConfirmAddressEmailSuccessPayload {
  status: number;
  detail: any;
  token: string;
}

export interface IChangePasswordSuccessPayload {
  status: number;
  detail: any;
}

export type TChangePasswordRequest = {
  token: string;
  password: string;
  code: string;
};

export type TConfirmAddressEmailRequest = {
  email: string;
};

export interface IPasswordResetReducer {
  confirmAddressEmail: IConfirmAddressEmailSuccessPayload;
  confirmAddressEmailFailure: Error | null;
  resendCode: IResendCodeSignUpSuccessPayload;
  resendCodeFailure: Error | null;
  changePasswordResponse: IChangePasswordSuccessPayload;
  changePasswordResponseFailure: Error | null;
}
