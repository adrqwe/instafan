import {
  THomePageData,
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

export interface IHomePageFromState {
  homePageData: THomePageData;
  singleHomePageData: TSingleHomePageData;
  getAddCommentResponse: TAddCommentSuccessPayload;
  getCheckExistTokenDetails: ICheckExistTokenSuccessPayload;
  getCurrentToken: TCurrentToken;
}
export interface IHomePageFromDispatch {
  mounted: () => void;
  mountedSingleHomePageData: (data: TSingleHomePageDataId) => void;
  mountedAddComment: (data: TAddCommentRequest) => void;
  mountedLikeThePost: (data: TLikeThePostRequest) => void;
}
export type IHomePageProps = IHomePageFromState & IHomePageFromDispatch;
