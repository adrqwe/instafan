import { TSignUpRequest } from "../../models/signUp/types";

export interface ISignUpPageFromState {
  getSignUpResponse: any;
}
export interface ISignUpPageFromDispatch {
  mountedSignUp: (data: TSignUpRequest) => void;
}
export type ISignUpPageProps = ISignUpPageFromState & ISignUpPageFromDispatch;
