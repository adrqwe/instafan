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
  getHomePageData,
  getSingleHomePageData,
  mounted,
  mountedSingleHomePageData,
} from "../actions";
import config from "../../../config";

export const fetchHomePageDataWhenMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mounted)),
    mergeMap$((action) => {
      return of$(getHomePageData.request(config.defaultPartner));
    })
  );
};

export const getHomePageDataWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { homePageDataService }
) => {
  return action$.pipe(
    filter$(isActionOf(getHomePageData.request)),
    mergeMap$((action) => {
      return from$(homePageDataService.getHomePageData()).pipe(
        mergeMap$((data) => {
          return of$(getHomePageData.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => homePageDataService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(getHomePageData.failure(error));
        })
      );
    })
  );
};

export const fetchSingleHomePageDataWhenMounted: _Store.IEpic = (
  action$,
  state$
) => {
  return action$.pipe(
    filter$(isActionOf(mountedSingleHomePageData)),
    mergeMap$((action) => {
      return of$(getSingleHomePageData.request(action.payload));
    })
  );
};

export const getSingleHomePageDataWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { homePageDataService }
) => {
  return action$.pipe(
    filter$(isActionOf(getSingleHomePageData.request)),
    mergeMap$((action) => {
      return from$(
        homePageDataService.getSingleHomePageData(action.payload)
      ).pipe(
        mergeMap$((data) => {
          return of$(getSingleHomePageData.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => homePageDataService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(getSingleHomePageData.failure(error));
        })
      );
    })
  );
};
