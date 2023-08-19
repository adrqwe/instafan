import _Store from "@Store";
import { Selector } from "reselect";

export const getAuthTokenFailure: Selector<_Store.IState, Error | null> = (
  state
) => state.signUp.authTokenFailure;
