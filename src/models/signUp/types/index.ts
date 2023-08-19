import { ActionType } from "typesafe-actions";

import * as actions from "./../actions";

export type IAction = ActionType<typeof actions>;

export interface ISignUpSuccessPayload {
  status: number;
  detail: any;
  valid: boolean;
}
export interface ISignUpTokenSuccessPayload {
  status: number;
  token: string;
  detail: any;
}
export interface ICommitSignUpSuccessPayload {
  status: number;
  token: string;
  detail: any;
  valid: boolean;
}
export interface IResendCodeSignUpSuccessPayload {
  status: number;
  detail: any;
}

export interface ISignUpReducer {
  resendResponse: IResendCodeSignUpSuccessPayload;
  signUpResponse: ISignUpSuccessPayload;
  authToken: ISignUpTokenSuccessPayload;
  commitResponse: ICommitSignUpSuccessPayload;
  signUpResponseFailure: Error | null;
  authTokenFailure: Error | null;
  commitResponseFailure: Error | null;
  resendResponseFailure: Error | null;
}

export type TSignUpRequest = {
  email: string;
  fullName: string;
  username: string;
  password: string;
};

export type TSignUpRequestWithBirthday = {
  email: string;
  fullName: string;
  username: string;
  password: string;
  birthday: string;
};

export type TCommitCodeSignUpRequest = {
  code: string;
  token: string;
};

export type TResendCodeSignUpRequest = {
  token: string;
};
