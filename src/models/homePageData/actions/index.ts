import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED,
  _GET_HOMEPAGEDATA_FAILURE,
  _GET_HOMEPAGEDATA_REQUEST,
  _GET_HOMEPAGEDATA_SUCCESS,
  MOUNTED_SINGLE_HOMEPAGEDATA,
  _GET_SINGLE_HOMEPAGEDATA_FAILURE,
  _GET_SINGLE_HOMEPAGEDATA_REQUEST,
  _GET_SINGLE_HOMEPAGEDATA_SUCCESS,
} from "../constants/constants";
import {
  THomePageData,
  TSingleHomePageData,
  TSingleHomePageDataId,
} from "../types";

const { createStandardAction } = deprecated;

export const mounted = createStandardAction(MOUNTED)();

export const getHomePageData = createAsyncAction(
  _GET_HOMEPAGEDATA_REQUEST,
  _GET_HOMEPAGEDATA_SUCCESS,
  _GET_HOMEPAGEDATA_FAILURE
)<number, THomePageData, Error>();

export const mountedSingleHomePageData = createStandardAction(
  MOUNTED_SINGLE_HOMEPAGEDATA
)<TSingleHomePageDataId>();

export const getSingleHomePageData = createAsyncAction(
  _GET_SINGLE_HOMEPAGEDATA_REQUEST,
  _GET_SINGLE_HOMEPAGEDATA_SUCCESS,
  _GET_SINGLE_HOMEPAGEDATA_FAILURE
)<TSingleHomePageDataId, TSingleHomePageData, Error>();
