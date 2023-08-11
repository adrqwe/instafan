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

import {
  postSignUp,
  mountedSignUp,
  postCheckSignUp,
  mountedCheckSignUp,
} from "../actions";

export const fetchSignUpWhenMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mountedCheckSignUp)),
    mergeMap$((action) => {
      return of$(postCheckSignUp.request(action.payload));
    })
  );
};

export const getSignUpResponseWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { signUpService }
) => {
  return action$.pipe(
    filter$(isActionOf(postCheckSignUp.request)),
    mergeMap$((action) => {
      return from$(signUpService.getSignUpResponse(action.payload)).pipe(
        mergeMap$((data) => {
          return of$(postCheckSignUp.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => signUpService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(postCheckSignUp.failure(error));
        })
      );
    })
  );
};

export const fetchSignUpAuthTokenWhenMounted: _Store.IEpic = (
  action$,
  state$
) => {
  return action$.pipe(
    filter$(isActionOf(mountedSignUp)),
    mergeMap$((action) => {
      return of$(postSignUp.request(action.payload));
    })
  );
};

export const getSignUpAuthTokenWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { signUpService }
) => {
  return action$.pipe(
    filter$(isActionOf(postSignUp.request)),
    mergeMap$((action) => {
      return from$(signUpService.getSignUpAuthToken(action.payload)).pipe(
        mergeMap$((data) => {
          return of$(postSignUp.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => signUpService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(postSignUp.failure(error));
        })
      );
    })
  );
};
