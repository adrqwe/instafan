import {
  ISignUpSuccessPayload,
  ISignUpTokenSuccessPayload,
  TSignUpRequest,
  TSignUpRequestWithBirthday,
} from "../../models/signUp/types";

export interface ISignUpPageFromState {
  getSignUpResponse: ISignUpSuccessPayload;
  getAuthToken: ISignUpTokenSuccessPayload;
}
export interface ISignUpPageFromDispatch {
  mountedCheckSignUp: (data: TSignUpRequest) => void;
  mountedSignUp: (data: TSignUpRequestWithBirthday) => void;
}
export type ISignUpPageProps = ISignUpPageFromState & ISignUpPageFromDispatch;
