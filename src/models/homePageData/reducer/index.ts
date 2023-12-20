import { getType } from "typesafe-actions";

import { getHomePageData, getSingleHomePageData } from "../actions";
import { IHomePageDataReducer, IAction } from "../types";

const initialState: IHomePageDataReducer = {
  homePageData: { data: [], status: 100 },
  singleHomePageData: { data: [], status: 100 },
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
    case getType(getSingleHomePageData.success):
      return {
        ...state,
        singleHomePageData: action.payload,
      };
    default:
      return state;
  }
};

export default homePageDataReducer;
