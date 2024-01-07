import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED_ADD_COMMENT,
  _POST_ADD_COMMENT_REQUEST,
  _POST_ADD_COMMENT_SUCCESS,
  _POST_ADD_COMMENT_FAILURE,
  MOUNTED_LIKE_THE_POST,
  _POST_LIKE_THE_POST_FAILURE,
  _POST_LIKE_THE_POST_REQUEST,
  _POST_LIKE_THE_POST_SUCCESS,
} from "../constants/constants";
import {
  TAddCommentRequest,
  TAddCommentSuccessPayload,
  TLikeThePostRequest,
} from "../types";

const { createStandardAction } = deprecated;

export const mountedAddComment =
  createStandardAction(MOUNTED_ADD_COMMENT)<TAddCommentRequest>();

export const postAddComment = createAsyncAction(
  _POST_ADD_COMMENT_REQUEST,
  _POST_ADD_COMMENT_SUCCESS,
  _POST_ADD_COMMENT_FAILURE
)<TAddCommentRequest, TAddCommentSuccessPayload, Error>();

export const mountedLikeThePost = createStandardAction(
  MOUNTED_LIKE_THE_POST
)<TLikeThePostRequest>();

export const postLikeThePost = createAsyncAction(
  _POST_LIKE_THE_POST_REQUEST,
  _POST_LIKE_THE_POST_SUCCESS,
  _POST_LIKE_THE_POST_FAILURE
)<TLikeThePostRequest, TAddCommentSuccessPayload, Error>();
