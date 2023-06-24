import _Store from "@Store";
import { Selector } from "reselect";

import { THomePageData } from "../types";

export const getHomePageData: Selector<_Store.IState, THomePageData> = (
  state
) => state.homePageData.homePageData;
