import { ActionType } from "typesafe-actions";

import * as actions from "./../actions";

export type IAction = ActionType<typeof actions>;

export interface ISignUpSuccessPayload {}

export interface ISignUpReducer {
  signUpResponse: any;
}

export type TSignUpRequest = {
  email: string;
  fullName: string;
  username: string;
  password: string;
};
