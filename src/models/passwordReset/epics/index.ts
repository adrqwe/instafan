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
  mountedChangePassword,
  mountedConfirmAddressEmail,
  mountedResendCodePasswordReset,
  postChangePassword,
  postConfirmAddressEmail,
  postResendCodePasswordReset,
} from "../actions";

export const fetchConfirmAddressEmailWhenMounted: _Store.IEpic = (
  action$,
  state$
) => {
  return action$.pipe(
    filter$(isActionOf(mountedConfirmAddressEmail)),
    mergeMap$((action) => {
      return of$(postConfirmAddressEmail.request(action.payload));
    })
  );
};

export const getConfirmAddressEmailResponseWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { passwordResetService }
) => {
  return action$.pipe(
    filter$(isActionOf(postConfirmAddressEmail.request)),
    mergeMap$((action) => {
      return from$(
        passwordResetService.getConfirmEmailResponse(action.payload)
      ).pipe(
        mergeMap$((data) => {
          return of$(postConfirmAddressEmail.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => passwordResetService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(postConfirmAddressEmail.failure(error));
        })
      );
    })
  );
};

export const fetchResendCodeWhenMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mountedResendCodePasswordReset)),
    mergeMap$((action) => {
      return of$(postResendCodePasswordReset.request(action.payload));
    })
  );
};

export const getResendCodeResponseWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { passwordResetService }
) => {
  return action$.pipe(
    filter$(isActionOf(postResendCodePasswordReset.request)),
    mergeMap$((action) => {
      return from$(
        passwordResetService.getResendCodeResponse(action.payload)
      ).pipe(
        mergeMap$((data) => {
          return of$(postResendCodePasswordReset.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => passwordResetService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(postResendCodePasswordReset.failure(error));
        })
      );
    })
  );
};

export const fetchChangePasswordWhenMounted: _Store.IEpic = (
  action$,
  state$
) => {
  return action$.pipe(
    filter$(isActionOf(mountedChangePassword)),
    mergeMap$((action) => {
      return of$(postChangePassword.request(action.payload));
    })
  );
};

export const getChangePasswordResponseWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { passwordResetService }
) => {
  return action$.pipe(
    filter$(isActionOf(postChangePassword.request)),
    mergeMap$((action) => {
      return from$(
        passwordResetService.getChangePasswordResponse(action.payload)
      ).pipe(
        mergeMap$((data) => {
          return of$(postChangePassword.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => passwordResetService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(postChangePassword.failure(error));
        })
      );
    })
  );
};
