import { getType } from "typesafe-actions";

import { postAddComment } from "../actions";
import { IAction, IPostsReducer } from "../types";

const initialState: IPostsReducer = {
  addCommentRespons: { status: 100, detail: null, added: false },
};

const postsReducer = (
  state: IPostsReducer = initialState,
  action: IAction
): IPostsReducer => {
  switch (action.type) {
    case getType(postAddComment.success):
      return {
        ...state,
        addCommentRespons: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
