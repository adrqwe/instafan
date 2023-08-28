import _Store from "@Store";
import { Selector } from "reselect";

import { IResendCodeSignUpSuccessPayload } from "../../signUp/types";

export const getResendCodePasswordReset: Selector<
  _Store.IState,
  IResendCodeSignUpSuccessPayload
> = (state) => state.passwordReset.resendCode;
