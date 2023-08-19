import _Store from "@Store";
import { Selector } from "reselect";

import { ICommitSignUpSuccessPayload } from "../types";

export const getConfirmCodeResponse: Selector<
  _Store.IState,
  ICommitSignUpSuccessPayload
> = (state) => state.signUp.commitResponse;
