import _Store from "@Store";
import { Selector } from "reselect";

export const getSignUpResponse: Selector<_Store.IState, any> = (state) =>
  state.signUp.signUpResponse;
