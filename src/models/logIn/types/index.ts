import { ActionType } from "typesafe-actions";

import * as actions from "./../actions";

export type IAction = ActionType<typeof actions>;

export interface ILogInSuccessPayload {
  status: number;
  detail: any;
  token: string;
}

export type TLogInRequest = {
  email: string;
  password: string;
  savaLogInDetails: boolean;
};

export interface ILogInReducer {
  logInDetails: ILogInSuccessPayload;
  logInFailure: Error | null;
}
