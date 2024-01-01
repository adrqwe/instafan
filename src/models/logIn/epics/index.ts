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
  mountedCheckExistToken,
  mountedLogIn,
  postCheckExistToken,
  postLogIn,
  setCurrentToken,
} from "../actions";

export const fetchLogInWhenMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mountedLogIn)),
    mergeMap$((action) => {
      return of$(postLogIn.request(action.payload));
    })
  );
};

export const getLogInResponseWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { logInService }
) => {
  return action$.pipe(
    filter$(isActionOf(postLogIn.request)),
    mergeMap$((action) => {
      return from$(logInService.getLogInResponse(action.payload)).pipe(
        mergeMap$((data) => {
          return of$(postLogIn.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => logInService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(postLogIn.failure(error));
        })
      );
    })
  );
};

export const fetchCheckExistTokenWhenMounted: _Store.IEpic = (
  action$,
  state$
) => {
  return action$.pipe(
    filter$(isActionOf(mountedCheckExistToken)),
    mergeMap$((action) => {
      return of$(postCheckExistToken.request(action.payload));
    })
  );
};

export const fetchCurrentTokenWhenMountedCheckExistToken: _Store.IEpic = (
  action$,
  state$
) => {
  return action$.pipe(
    filter$(isActionOf(mountedCheckExistToken)),
    mergeMap$((action) => {
      return of$(setCurrentToken(action.payload.token));
    })
  );
};

export const getCheckExistTokenResponseWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { logInService }
) => {
  return action$.pipe(
    filter$(isActionOf(postCheckExistToken.request)),
    mergeMap$((action) => {
      return from$(
        logInService.getCheckExistTokenResponse(action.payload)
      ).pipe(
        mergeMap$((data) => {
          return of$(postCheckExistToken.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => logInService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(postCheckExistToken.failure(error));
        })
      );
    })
  );
};
