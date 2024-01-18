import { ICheckExistTokenSuccessPayload } from "../../models/logIn/types";

export interface IAccountPageFromState {
  getCheckExistTokenDetails: ICheckExistTokenSuccessPayload;
}
export interface IAccountPageFromDispatch {}

export type IAccountPageProps = IAccountPageFromState &
  IAccountPageFromDispatch;
