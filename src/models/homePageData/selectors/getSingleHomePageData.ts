import _Store from "@Store";
import { Selector } from "reselect";

import { TSingleHomePageData } from "../types";

export const getSingleHomePageData: Selector<
  _Store.IState,
  TSingleHomePageData
> = (state) => state.homePageData.singleHomePageData;
