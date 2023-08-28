import _Store from "@Store";
import { Selector } from "reselect";

export const getResendCodePasswordResetFailure: Selector<
  _Store.IState,
  Error | null
> = (state) => state.passwordReset.resendCodeFailure;
