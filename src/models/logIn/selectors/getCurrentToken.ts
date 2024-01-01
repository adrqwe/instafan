import _Store from "@Store";
import { Selector } from "reselect";

import { TCurrentToken } from "../types";

export const getCurrentToken: Selector<_Store.IState, TCurrentToken> = (
  state
) => state.logInReducer.currentToken;
