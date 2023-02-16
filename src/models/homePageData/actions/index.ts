import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED,
  _GET_HOMEPAGEDATA_FAILURE,
  _GET_HOMEPAGEDATA_REQUEST,
  _GET_HOMEPAGEDATA_SUCCESS,
} from "../constants/constants";
import { IHomePageDataSuccessPayload } from "../types";

const { createStandardAction } = deprecated;

export const mounted = createStandardAction(MOUNTED)();

export const getHomePageData = createAsyncAction(
  _GET_HOMEPAGEDATA_REQUEST,
  _GET_HOMEPAGEDATA_SUCCESS,
  _GET_HOMEPAGEDATA_FAILURE
)<number, IHomePageDataSuccessPayload[], Error>();
