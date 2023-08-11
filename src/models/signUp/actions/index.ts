import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED,
  _POST_SIGN_UP_REQUEST,
  _POST_SIGN_UP_SUCCESS,
  _POST_SIGN_UP_FAILURE,
  CHECK_MOUNTED,
  _POST_CHECK_SIGN_UP_REQUEST,
  _POST_CHECK_SIGN_UP_SUCCESS,
} from "../constants/constants";
import {
  ISignUpSuccessPayload,
  ISignUpTokenSuccessPayload,
  TSignUpRequest,
  TSignUpRequestWithBirthday,
} from "../types";

const { createStandardAction } = deprecated;

export const mountedSignUp =
  createStandardAction(MOUNTED)<TSignUpRequestWithBirthday>();

export const postSignUp = createAsyncAction(
  _POST_SIGN_UP_REQUEST,
  _POST_SIGN_UP_SUCCESS,
  _POST_SIGN_UP_FAILURE
)<TSignUpRequestWithBirthday, ISignUpTokenSuccessPayload, Error>();

export const mountedCheckSignUp =
  createStandardAction(CHECK_MOUNTED)<TSignUpRequest>();

export const postCheckSignUp = createAsyncAction(
  _POST_CHECK_SIGN_UP_REQUEST,
  _POST_CHECK_SIGN_UP_SUCCESS,
  _POST_SIGN_UP_FAILURE
)<TSignUpRequest, ISignUpSuccessPayload, Error>();
