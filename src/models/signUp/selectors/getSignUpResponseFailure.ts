import _Store from "@Store";
import { Selector } from "reselect";

export const getSignUpResponseFailure: Selector<_Store.IState, Error | null> = (
  state
) => state.signUp.signUpResponseFailure;
