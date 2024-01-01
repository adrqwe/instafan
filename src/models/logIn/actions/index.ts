import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED_LOGIN,
  _POST_LOG_IN_REQUEST,
  _POST_LOG_IN_SUCCESS,
  _POST_LOG_IN_FAILURE,
  MOUNTED_CHECK_EXIST_TOKEN,
  _POST_CHECK_EXIST_TOKEN_REQUEST,
  _POST_CHECK_EXIST_TOKEN_SUCCESS,
  _POST_CHECK_EXIST_TOKEN_FAILURE,
  CURRENT_TOKEN,
} from "../constants/constants";
import {
  TLogInRequest,
  ILogInSuccessPayload,
  TCheckExistToken,
  ICheckExistTokenSuccessPayload,
  TCurrentToken,
} from "../types";

const { createStandardAction } = deprecated;

export const mountedLogIn =
  createStandardAction(MOUNTED_LOGIN)<TLogInRequest>();

export const postLogIn = createAsyncAction(
  _POST_LOG_IN_REQUEST,
  _POST_LOG_IN_SUCCESS,
  _POST_LOG_IN_FAILURE
)<TLogInRequest, ILogInSuccessPayload, Error>();

export const mountedCheckExistToken = createStandardAction(
  MOUNTED_CHECK_EXIST_TOKEN
)<TCheckExistToken>();

export const postCheckExistToken = createAsyncAction(
  _POST_CHECK_EXIST_TOKEN_REQUEST,
  _POST_CHECK_EXIST_TOKEN_SUCCESS,
  _POST_CHECK_EXIST_TOKEN_FAILURE
)<TCheckExistToken, ICheckExistTokenSuccessPayload, Error>();

export const setCurrentToken =
  createStandardAction(CURRENT_TOKEN)<TCurrentToken>();
