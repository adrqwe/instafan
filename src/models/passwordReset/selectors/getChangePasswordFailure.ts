import _Store from "@Store";
import { Selector } from "reselect";

export const getChangePasswordResponseFailure: Selector<
  _Store.IState,
  Error | null
> = (state) => state.passwordReset.changePasswordResponseFailure;
