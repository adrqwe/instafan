import _Store from "@Store";
import { Selector } from "reselect";

export const getCurrentUrl: Selector<_Store.IState, string> = (state) =>
  state.url.url;
