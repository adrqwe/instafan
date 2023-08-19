import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED,
  _POST_SIGN_UP_REQUEST,
  _POST_SIGN_UP_SUCCESS,
  _POST_SIGN_UP_FAILURE,
  CHECK_MOUNTED,
  _POST_CHECK_SIGN_UP_REQUEST,
  _POST_CHECK_SIGN_UP_SUCCESS,
  _POST_CHECK_SIGN_UP_FAILURE,
  CONFIRM_MOUNTED,
  _POST_CONFIRM_SIGN_UP_FAILURE,
  _POST_CONFIRM_SIGN_UP_REQUEST,
  _POST_CONFIRM_SIGN_UP_SUCCESS,
  RESEND_MOUNTED,
  _POST_RESEND_SIGN_UP_FAILURE,
  _POST_RESEND_SIGN_UP_REQUEST,
  _POST_RESEND_SIGN_UP_SUCCESS,
} from "../constants/constants";
import {
  ICommitSignUpSuccessPayload,
  IResendCodeSignUpSuccessPayload,
  ISignUpSuccessPayload,
  ISignUpTokenSuccessPayload,
  TCommitCodeSignUpRequest,
  TResendCodeSignUpRequest,
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
  _POST_CHECK_SIGN_UP_FAILURE
)<TSignUpRequest, ISignUpSuccessPayload, Error>();

export const mountedConfirmCodeSignUp =
  createStandardAction(CONFIRM_MOUNTED)<TCommitCodeSignUpRequest>();

export const postConfirmCodeSignUp = createAsyncAction(
  _POST_CONFIRM_SIGN_UP_REQUEST,
  _POST_CONFIRM_SIGN_UP_SUCCESS,
  _POST_CONFIRM_SIGN_UP_FAILURE
)<TCommitCodeSignUpRequest, ICommitSignUpSuccessPayload, Error>();

export const mountedResendCodeSignUp =
  createStandardAction(RESEND_MOUNTED)<TResendCodeSignUpRequest>();

export const postResendCodeSignUp = createAsyncAction(
  _POST_RESEND_SIGN_UP_REQUEST,
  _POST_RESEND_SIGN_UP_SUCCESS,
  _POST_RESEND_SIGN_UP_FAILURE
)<TResendCodeSignUpRequest, IResendCodeSignUpSuccessPayload, Error>();
