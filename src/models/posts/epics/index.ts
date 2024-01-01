import { EMPTY as EMPTY$, from as from$, of as of$ } from "rxjs";
import {
  catchError as catchError$,
  filter as filter$,
  mergeMap as mergeMap$,
  takeUntil as takeUntil$,
  tap as tap$,
} from "rxjs/operators";
import { isActionOf, isOfType } from "typesafe-actions";
import _Store from "@Store";
import { LOCATION_CHANGE } from "react-router-redux";

import { mountedAddComment, postAddComment } from "../actions";

export const fetchAddCommentWhenMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mountedAddComment)),
    mergeMap$((action) => {
      return of$(postAddComment.request(action.payload));
    })
  );
};

export const getAddCommentResponseWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { postsService }
) => {
  return action$.pipe(
    filter$(isActionOf(postAddComment.request)),
    mergeMap$((action) => {
      return from$(postsService.getAddCommentResponse(action.payload)).pipe(
        mergeMap$((data) => {
          return of$(postAddComment.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => postsService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(postAddComment.failure(error));
        })
      );
    })
  );
};
