import {
  ICheckExistTokenSuccessPayload,
  TCheckExistToken,
} from "../models/logIn/types";

export interface INavigatorFromState {
  getCheckExistTokenDetails: ICheckExistTokenSuccessPayload;
}
export interface INavigatorFromDispatch {
  mountedCheckExistToken: (data: TCheckExistToken) => void;
  setLoaderState: (data: boolean) => void;
}
export type INavigatorProps = INavigatorFromState & INavigatorFromDispatch;
