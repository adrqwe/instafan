import { getType } from "typesafe-actions";

import { getHomePageData } from "../actions";
import { IHomePageDataReducer, IAction } from "../types";

const initialState: IHomePageDataReducer = {
  homePageData: { data: [], status: 100 },
};

const homePageDataReducer = (
  state: IHomePageDataReducer = initialState,
  action: IAction
): IHomePageDataReducer => {
  switch (action.type) {
    case getType(getHomePageData.success):
      return {
        ...state,
        homePageData: action.payload,
      };
    default:
      return state;
  }
};

export default homePageDataReducer;
