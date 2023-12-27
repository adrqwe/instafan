import _Store from "@Store";
import { Selector } from "reselect";

export const getLoaderState: Selector<_Store.IState, boolean> = (state) =>
  state.loader.loaderState;
