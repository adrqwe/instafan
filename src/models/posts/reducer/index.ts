import { getType } from "typesafe-actions";

import { postAddComment } from "../actions";
import { IAction, IPostsReducer } from "../types";

const initialState: IPostsReducer = {
  addCommentResponse: { status: 100, detail: null, added: false },
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

    default:
      return state;
  }
};

export default postsReducer;
