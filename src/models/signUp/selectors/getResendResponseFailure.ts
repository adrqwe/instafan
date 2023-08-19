import _Store from "@Store";
import { Selector } from "reselect";

export const getResendResponseFailure: Selector<_Store.IState, Error | null> = (
  state
) => state.signUp.resendResponseFailure;
