import { getType } from "typesafe-actions";

import {
  postChangePassword,
  postConfirmAddressEmail,
  postResendCodePasswordReset,
} from "../actions";
import { IAction, IPasswordResetReducer } from "../types";

const initialState: IPasswordResetReducer = {
  confirmAddressEmail: { status: 100, detail: null, token: "" },
  confirmAddressEmailFailure: null,
  resendCode: { status: 100, detail: null },
  resendCodeFailure: null,
  changePasswordResponse: { status: 100, detail: null },
  changePasswordResponseFailure: null,
};

const passwordResetReducer = (
  state: IPasswordResetReducer = initialState,
  action: IAction
): IPasswordResetReducer => {
  switch (action.type) {
    case getType(postConfirmAddressEmail.success):
      return {
        ...state,
        confirmAddressEmail: action.payload,
      };
    case getType(postResendCodePasswordReset.success):
      return {
        ...state,
        resendCode: action.payload,
      };
    case getType(postChangePassword.success):
      return {
        ...state,
        changePasswordResponse: action.payload,
      };
    case getType(postConfirmAddressEmail.failure):
      return {
        ...state,
        confirmAddressEmailFailure: action.payload,
      };
    case getType(postResendCodePasswordReset.failure):
      return {
        ...state,
        resendCodeFailure: action.payload,
      };
    case getType(postChangePassword.failure):
      return {
        ...state,
        changePasswordResponseFailure: action.payload,
      };

    default:
      return state;
  }
};

export default passwordResetReducer;
