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

export interface ISignUpReducer {
  signUpResponse: ISignUpSuccessPayload;
  authToken: ISignUpTokenSuccessPayload;
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
