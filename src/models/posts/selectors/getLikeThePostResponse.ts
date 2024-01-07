import _Store from "@Store";
import { Selector } from "reselect";

import { TAddCommentSuccessPayload } from "../types";

export const getLikeThePostResponse: Selector<
  _Store.IState,
  TAddCommentSuccessPayload
> = (state) => state.posts.likeThePostResponse;
