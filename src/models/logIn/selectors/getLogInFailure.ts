import _Store from "@Store";
import { Selector } from "reselect";

export const getLogInFailure: Selector<_Store.IState, Error | null> = (state) =>
  state.logInReducer.logInFailure;
