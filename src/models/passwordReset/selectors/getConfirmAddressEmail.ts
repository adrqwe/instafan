import _Store from "@Store";
import { Selector } from "reselect";

import { IConfirmAddressEmailSuccessPayload } from "../types";

export const getConfirmAddressEmail: Selector<
  _Store.IState,
  IConfirmAddressEmailSuccessPayload
> = (state) => state.passwordReset.confirmAddressEmail;
