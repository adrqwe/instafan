import _Store from "@Store";
import { Selector } from "reselect";

import { ILogInSuccessPayload } from "../types";

export const getLogInDetails: Selector<_Store.IState, ILogInSuccessPayload> = (
  state
) => state.logInReducer.logInDetails;
