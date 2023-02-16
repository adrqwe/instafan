import { ActionType } from "typesafe-actions";

import * as actions from "./../actions";

export type IAction = ActionType<typeof actions>;

export interface IHomePageDataSuccessPayload {
  id: number;
  count_of_likes: number;
  image: string;
  count_of_comments: number;
}

export interface IHomePageDataReducer {
  homePageData: IHomePageDataSuccessPayload[];
}
