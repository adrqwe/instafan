import { getType } from "typesafe-actions";

import { postCheckSignUp, postSignUp } from "../actions";
import { ISignUpReducer, IAction } from "../types";

const initialState: ISignUpReducer = {
  signUpResponse: { status: 100, detail: null, valid: false },
  authToken: { status: 100, token: "", detail: null },
};

const signUpReducer = (
  state: ISignUpReducer = initialState,
  action: IAction
): ISignUpReducer => {
  switch (action.type) {
    case getType(postCheckSignUp.success):
      return {
        ...state,
        signUpResponse: action.payload,
      };
    case getType(postSignUp.success):
      return {
        ...state,
        authToken: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
