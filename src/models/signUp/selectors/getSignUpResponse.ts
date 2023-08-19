import _Store from "@Store";
import { Selector } from "reselect";

import { ISignUpSuccessPayload } from "../types";

export const getSignUpResponse: Selector<
  _Store.IState,
  ISignUpSuccessPayload
> = (state) => state.signUp.signUpResponse;
