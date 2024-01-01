import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED_ADD_COMMENT,
  _POST_ADD_COMMENT_REQUEST,
  _POST_ADD_COMMENT_SUCCESS,
  _POST_ADD_COMMENT_FAILURE,
} from "../constants/constants";
import { TAddCommentRequest, TAddCommentSuccessPayload } from "../types";

const { createStandardAction } = deprecated;

export const mountedAddComment =
  createStandardAction(MOUNTED_ADD_COMMENT)<TAddCommentRequest>();

export const postAddComment = createAsyncAction(
  _POST_ADD_COMMENT_REQUEST,
  _POST_ADD_COMMENT_SUCCESS,
  _POST_ADD_COMMENT_FAILURE
)<TAddCommentRequest, TAddCommentSuccessPayload, Error>();
