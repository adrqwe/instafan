import { ActionType } from "typesafe-actions";

import * as actions from "./../actions";

export type IAction = ActionType<typeof actions>;

export interface IHomePageDataSuccessPayload {
  id: number;
  count_of_likes: number;
  image: string;
  count_of_comments: number;
  description: string;
}

export interface IHomePageDataReducer {
  homePageData: THomePageData;
  singleHomePageData: TSingleHomePageData;
}

export type THomePageData =
  | {
      data: IHomePageDataSuccessPayload[];
      status: number;
    }
  | { data: []; status: number };

export interface ISingleHomePageDataSuccessPayload {
  postId: number;
  image: string;
  description: string;
  authorId: number;
  authorName: string;
  liked: number;
  comments: TCommentType[];
}

export type TCommentType = {
  commentedBy: string;
  commentId: number;
  comment: string;
  userId: number;
};

export type TSingleHomePageData =
  | {
      data: ISingleHomePageDataSuccessPayload;
      status: number;
    }
  | { data: []; status: number };

export type TSingleHomePageDataId = {
  id: number;
  token: string;
};
