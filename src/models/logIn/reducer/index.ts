import { getType } from "typesafe-actions";

import { postCheckExistToken, postLogIn, setCurrentToken } from "../actions";
import { IAction, ILogInReducer } from "../types";

const initialState: ILogInReducer = {
  logInDetails: { status: 100, detail: null, token: "" },
  logInFailure: null,
  checkExistTokenDetails: { status: 100, detail: null, valid: false },
  checkExistTokenFailure: null,
  currentToken: null,
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
    case getType(postCheckExistToken.success):
      return {
        ...state,
        checkExistTokenDetails: action.payload,
      };
    case getType(setCurrentToken):
      return {
        ...state,
        currentToken: action.payload,
      };
    //errors
    case getType(postLogIn.failure):
      return {
        ...state,
        logInFailure: action.payload,
      };
    case getType(postCheckExistToken.failure):
      return {
        ...state,
        checkExistTokenFailure: action.payload,
      };

    default:
      return state;
  }
};

export default logInReducer;
