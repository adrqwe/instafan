import _Store from "@Store";
import { Selector } from "reselect";

export const getConfirmCodeResponseFailure: Selector<
  _Store.IState,
  Error | null
> = (state) => state.signUp.commitResponseFailure;
