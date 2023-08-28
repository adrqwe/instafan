import _Store from "@Store";
import { Selector } from "reselect";

import { IChangePasswordSuccessPayload } from "../types";

export const getChangePasswordResponse: Selector<
  _Store.IState,
  IChangePasswordSuccessPayload
> = (state) => state.passwordReset.changePasswordResponse;
