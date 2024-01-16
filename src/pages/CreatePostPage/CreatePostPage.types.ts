import {
  ICheckExistTokenSuccessPayload,
  TCurrentToken,
} from "../../models/logIn/types";
import { TCreatePostRequest } from "../../models/posts/types";

export interface ICreatePostPageFromState {
  getCheckExistTokenDetails: ICheckExistTokenSuccessPayload;
  getCurrentToken: TCurrentToken;
}
export interface ICreatePostPageFromDispatch {
  mountedCreatePost: (data: TCreatePostRequest) => void;
}
export type ICreatePostPageProps = ICreatePostPageFromState &
  ICreatePostPageFromDispatch;
