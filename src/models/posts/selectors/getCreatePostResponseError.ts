import _Store from "@Store";
import { Selector } from "reselect";

export const getCreatePostResponseError: Selector<
  _Store.IState,
  Error | null
> = (state) => state.posts.createPostResponseError;
