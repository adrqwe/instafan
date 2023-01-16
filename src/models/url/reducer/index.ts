import { getType } from "typesafe-actions";
import { getUrl } from "../actions";
import { IAction, IUrlReducer } from "../types";

const initialState: IUrlReducer = {
  url: "",
};

const urlReducer = (
  state: any = initialState,
  action: IAction
): IUrlReducer => {
  switch (action.type) {
    case getType(getUrl):
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

export default urlReducer;
