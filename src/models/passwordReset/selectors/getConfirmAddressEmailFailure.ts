import _Store from "@Store";
import { Selector } from "reselect";

export const getConfirmAddressEmailFailure: Selector<
  _Store.IState,
  Error | null
> = (state) => state.passwordReset.confirmAddressEmailFailure;
