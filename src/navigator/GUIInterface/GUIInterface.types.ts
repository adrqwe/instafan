import {
  ICheckExistTokenSuccessPayload,
  ILogInSuccessPayload,
  TCheckExistToken,
} from "../../models/logIn/types";

export interface IGUIInterface {
  children: JSX.Element;
}
export interface IGUIInterfaceFromState {
  getCheckExistTokenDetails: ICheckExistTokenSuccessPayload;
  getLogInDetails: ILogInSuccessPayload;
}
export interface IGUIInterfaceFromDispatch {
  mountedCheckExistToken: (data: TCheckExistToken) => void;
}
export type IGUIInterfaceProps = IGUIInterfaceFromState &
  IGUIInterfaceFromDispatch &
  IGUIInterface;
