import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED_CONFIRM_ADDRESS_EMAIL,
  _POST_CONFIRM_ADDRESS_EMAIL_REQUEST,
  _POST_CONFIRM_ADDRESS_EMAIL_SUCCESS,
  _POST_CONFIRM_ADDRESS_EMAIL_FAILURE,
  MOUNTED_RESEND_CODE,
  _POST_RESEND_CODE_FAILURE,
  _POST_RESEND_CODE_REQUEST,
  _POST_RESEND_CODE_SUCCESS,
  MOUNTED_CHANGE_PASSWORD,
  _POST_CHANGE_PASSWORD_REQUEST,
  _POST_CHANGE_PASSWORD_SUCCESS,
  _POST_CHANGE_PASSWORD_FAILURE,
} from "../constants/constants";
import {
  IChangePasswordSuccessPayload,
  IConfirmAddressEmailSuccessPayload,
  TChangePasswordRequest,
  TConfirmAddressEmailRequest,
} from "../types";
import {
  IResendCodeSignUpSuccessPayload,
  TResendCodeSignUpRequest,
} from "../../signUp/types";

const { createStandardAction } = deprecated;

export const mountedConfirmAddressEmail = createStandardAction(
  MOUNTED_CONFIRM_ADDRESS_EMAIL
)<TConfirmAddressEmailRequest>();

export const postConfirmAddressEmail = createAsyncAction(
  _POST_CONFIRM_ADDRESS_EMAIL_REQUEST,
  _POST_CONFIRM_ADDRESS_EMAIL_SUCCESS,
  _POST_CONFIRM_ADDRESS_EMAIL_FAILURE
)<TConfirmAddressEmailRequest, IConfirmAddressEmailSuccessPayload, Error>();

export const mountedResendCodePasswordReset =
  createStandardAction(MOUNTED_RESEND_CODE)<TResendCodeSignUpRequest>();

export const postResendCodePasswordReset = createAsyncAction(
  _POST_RESEND_CODE_REQUEST,
  _POST_RESEND_CODE_SUCCESS,
  _POST_RESEND_CODE_FAILURE
)<TResendCodeSignUpRequest, IResendCodeSignUpSuccessPayload, Error>();

export const mountedChangePassword = createStandardAction(
  MOUNTED_CHANGE_PASSWORD
)<TChangePasswordRequest>();

export const postChangePassword = createAsyncAction(
  _POST_CHANGE_PASSWORD_REQUEST,
  _POST_CHANGE_PASSWORD_SUCCESS,
  _POST_CHANGE_PASSWORD_FAILURE
)<TChangePasswordRequest, IChangePasswordSuccessPayload, Error>();
