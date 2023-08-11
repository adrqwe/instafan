import _Store from "@Store";
import { Selector } from "reselect";

import { ISignUpTokenSuccessPayload } from "../types";

export const getAuthToken: Selector<
  _Store.IState,
  ISignUpTokenSuccessPayload
> = (state) => state.signUp.authToken;
