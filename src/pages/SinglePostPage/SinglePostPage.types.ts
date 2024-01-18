import {
  TSingleHomePageData,
  TSingleHomePageDataId,
} from "../../models/homePageData/types";
import {
  ICheckExistTokenSuccessPayload,
  TCurrentToken,
} from "../../models/logIn/types";
import {
  TAddCommentRequest,
  TAddCommentSuccessPayload,
  TLikeThePostRequest,
} from "../../models/posts/types";

export interface ISinglePostPageFromState {
  singleHomePageData: TSingleHomePageData;
  getCurrentToken: TCurrentToken;
  getCheckExistTokenDetails: ICheckExistTokenSuccessPayload;
  getAddCommentResponse: TAddCommentSuccessPayload;
}
export interface ISinglePostPageFromDispatch {
  mountedSingleHomePageData: (data: TSingleHomePageDataId) => void;
  mountedAddComment: (data: TAddCommentRequest) => void;
  mountedLikeThePost: (data: TLikeThePostRequest) => void;
}
export type ISinglePostPageProps = ISinglePostPageFromState &
  ISinglePostPageFromDispatch;
