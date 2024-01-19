import { getType } from "typesafe-actions";

import { postAddComment, postCreatePost, postLikeThePost } from "../actions";
import { IAction, IPostsReducer } from "../types";

const initialState: IPostsReducer = {
  addCommentResponse: { status: 100, detail: null, added: false },
  likeThePostResponse: { status: 100, detail: null, added: false },
  createPostResponse: { status: 100, detail: null, added: false },
  createPostResponseError: null,
};

const postsReducer = (
  state: IPostsReducer = initialState,
  action: IAction
): IPostsReducer => {
  switch (action.type) {
    case getType(postAddComment.success):
      return {
        ...state,
        addCommentResponse: action.payload,
      };
    case getType(postLikeThePost.success):
      return {
        ...state,
        likeThePostResponse: action.payload,
      };
    case getType(postCreatePost.success):
      return {
        ...state,
        createPostResponse: action.payload,
      };
    case getType(postCreatePost.failure):
      return {
        ...state,
        createPostResponseError: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
