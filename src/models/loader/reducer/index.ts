import { getType } from "typesafe-actions";

import { setLoaderState } from "../actions";
import { IAction, ILoaderReducer } from "../types";

const initialState: ILoaderReducer = {
  loaderState: true,
};

const loaderReducer = (
  state: ILoaderReducer = initialState,
  action: IAction
): ILoaderReducer => {
  switch (action.type) {
    case getType(setLoaderState):
      return {
        ...state,
        loaderState: action.payload,
      };

    default:
      return state;
  }
};

export default loaderReducer;
