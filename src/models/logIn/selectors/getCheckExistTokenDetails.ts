import _Store from "@Store";
import { Selector } from "reselect";

import { ICheckExistTokenSuccessPayload } from "../types";

export const getCheckExistTokenDetails: Selector<
  _Store.IState,
  ICheckExistTokenSuccessPayload
> = (state) => state.logInReducer.checkExistTokenDetails;
