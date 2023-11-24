import _Store from "@Store";
import { Selector } from "reselect";

export const getCheckExistTokenFailure: Selector<
  _Store.IState,
  Error | null
> = (state) => state.logInReducer.checkExistTokenFailure;
