import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED,
  _POST_SIGN_UP_REQUEST,
  _POST_SIGN_UP_SUCCESS,
  _POST_SIGN_UP_FAILURE,
} from "../constants/constants";
import { TSignUpRequest } from "../types";

const { createStandardAction } = deprecated;

export const mountedSignUp = createStandardAction(MOUNTED)<TSignUpRequest>();

export const postSignUp = createAsyncAction(
  _POST_SIGN_UP_REQUEST,
  _POST_SIGN_UP_SUCCESS,
  _POST_SIGN_UP_FAILURE
)<TSignUpRequest, any, Error>();
