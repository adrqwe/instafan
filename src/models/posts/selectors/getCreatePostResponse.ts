import _Store from "@Store";
import { Selector } from "reselect";

import { ICreatePostSuccessPayload } from "../types";

export const getCreatePostResponse: Selector<
  _Store.IState,
  ICreatePostSuccessPayload
> = (state) => state.posts.createPostResponse;
