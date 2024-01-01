import _Store from "@Store";
import { Selector } from "reselect";

import { TAddCommentSuccessPayload } from "../types";

export const getAddCommentRespons: Selector<
  _Store.IState,
  TAddCommentSuccessPayload
> = (state) => state.posts.addCommentRespons;
