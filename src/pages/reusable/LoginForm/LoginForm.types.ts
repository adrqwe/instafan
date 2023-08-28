import {
  ILogInSuccessPayload,
  TLogInRequest,
} from "../../../models/logIn/types";

export interface ILoginFormFromState {
  getLogInDetails: ILogInSuccessPayload;
}
export interface ILoginFormFromDispatch {
  mountedLogIn: (data: TLogInRequest) => void;
}

export type ILoginFormProps = ILoginFormFromState & ILoginFormFromDispatch;
