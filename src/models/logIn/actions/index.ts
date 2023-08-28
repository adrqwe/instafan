import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED_LOGIN,
  _POST_LOG_IN_REQUEST,
  _POST_LOG_IN_SUCCESS,
  _POST_LOG_IN_FAILURE,
} from "../constants/constants";
import { TLogInRequest, ILogInSuccessPayload } from "../types";

const { createStandardAction } = deprecated;

export const mountedLogIn =
  createStandardAction(MOUNTED_LOGIN)<TLogInRequest>();

export const postLogIn = createAsyncAction(
  _POST_LOG_IN_REQUEST,
  _POST_LOG_IN_SUCCESS,
  _POST_LOG_IN_FAILURE
)<TLogInRequest, ILogInSuccessPayload, Error>();
