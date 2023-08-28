import { getType } from "typesafe-actions";

import { postLogIn } from "../actions";
import { IAction, ILogInReducer } from "../types";

const initialState: ILogInReducer = {
  logInDetails: { status: 100, detail: null, token: "" },
  logInFailure: null,
};

const logInReducer = (
  state: ILogInReducer = initialState,
  action: IAction
): ILogInReducer => {
  switch (action.type) {
    case getType(postLogIn.success):
      return {
        ...state,
        logInDetails: action.payload,
      };

    //errors
    case getType(postLogIn.failure):
      return {
        ...state,
        logInFailure: action.payload,
      };

    default:
      return state;
  }
};

export default logInReducer;
