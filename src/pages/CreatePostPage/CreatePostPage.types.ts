import {
  ICheckExistTokenSuccessPayload,
  TCurrentToken,
} from "../../models/logIn/types";
import {
  ICreatePostSuccessPayload,
  TCreatePostRequest,
} from "../../models/posts/types";

export interface ICreatePostPageFromState {
  getCheckExistTokenDetails: ICheckExistTokenSuccessPayload;
  getCurrentToken: TCurrentToken;
  getCreatePostResponse: ICreatePostSuccessPayload;
}
export interface ICreatePostPageFromDispatch {
  mountedCreatePost: (data: TCreatePostRequest) => void;
}
export type ICreatePostPageProps = ICreatePostPageFromState &
  ICreatePostPageFromDispatch;
