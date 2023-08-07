import { getType } from "typesafe-actions";

import { postSignUp } from "../actions";
import { ISignUpReducer, IAction } from "../types";

const initialState: ISignUpReducer = {
  signUpResponse: 0,
};

const signUpReducer = (
  state: ISignUpReducer = initialState,
  action: IAction
): ISignUpReducer => {
  switch (action.type) {
    case getType(postSignUp.success):
      return {
        ...state,
        signUpResponse: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
