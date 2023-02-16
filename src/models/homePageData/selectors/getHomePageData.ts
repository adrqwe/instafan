import _Store from "@Store";
import { Selector } from "reselect";

import { IHomePageDataSuccessPayload } from "../types";

export const getHomePageData: Selector<
  _Store.IState,
  IHomePageDataSuccessPayload[]
> = (state) => state.homePageData.homePageData;
