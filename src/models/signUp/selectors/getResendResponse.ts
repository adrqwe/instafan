import _Store from "@Store";
import { Selector } from "reselect";

import { IResendCodeSignUpSuccessPayload } from "../types";

export const getResendResponse: Selector<
  _Store.IState,
  IResendCodeSignUpSuccessPayload
> = (state) => state.signUp.resendResponse;
