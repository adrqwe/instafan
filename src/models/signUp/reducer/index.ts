import { getType } from "typesafe-actions";

import {
  postCheckSignUp,
  postConfirmCodeSignUp,
  postResendCodeSignUp,
  postSignUp,
} from "../actions";
import { ISignUpReducer, IAction } from "../types";

const initialState: ISignUpReducer = {
  signUpResponse: { status: 100, detail: null, valid: false },
  authToken: { status: 100, token: "", detail: null },
  commitResponse: { status: 100, token: "", detail: null, valid: false },
  resendResponse: { status: 100, detail: null },
  signUpResponseFailure: null,
  authTokenFailure: null,
  commitResponseFailure: null,
  resendResponseFailure: null,
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
    case getType(postConfirmCodeSignUp.success):
      return {
        ...state,
        commitResponse: action.payload,
      };
    case getType(postResendCodeSignUp.success):
      return {
        ...state,
        resendResponse: action.payload,
      };

    //errors
    case getType(postCheckSignUp.failure):
      return {
        ...state,
        signUpResponseFailure: action.payload,
      };
    case getType(postSignUp.failure):
      return {
        ...state,
        authTokenFailure: action.payload,
      };
    case getType(postConfirmCodeSignUp.failure):
      return {
        ...state,
        commitResponseFailure: action.payload,
      };
    case getType(postResendCodeSignUp.failure):
      return {
        ...state,
        resendResponseFailure: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
