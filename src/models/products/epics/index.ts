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
import {
  getProducts,
  getSingleProduct,
  mounted,
  requestForSingleProduct,
} from "../actions";
import config from "../../../config";
import { LOCATION_CHANGE } from "react-router-redux";

export const fetchProductsWhenMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mounted)),
    mergeMap$((action) => {
      return of$(getProducts.request(config.defaultPartner));
    })
  );
};

export const getProductsWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { productsService }
) => {
  return action$.pipe(
    filter$(isActionOf(getProducts.request)),
    mergeMap$((action) => {
      return from$(productsService.getProducts(action.payload)).pipe(
        mergeMap$((data) => {
          return of$(getProducts.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => productsService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(getProducts.failure(error));
        })
      );
    })
  );
};

export const fetchSingleProductWhenMounted: _Store.IEpic = (
  action$,
  state$
) => {
  return action$.pipe(
    filter$(isActionOf(requestForSingleProduct)),
    mergeMap$((action) => {
      return of$(getSingleProduct.request("w"));
    })
  );
};

export const getSingleProductWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { productsService }
) => {
  return action$.pipe(
    filter$(isActionOf(getSingleProduct.request)),
    mergeMap$((action) => {
      return from$(productsService.getSingleProduct(action.payload)).pipe(
        mergeMap$((data) => {
          return of$(getSingleProduct.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => productsService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(getSingleProduct.failure(error));
        })
      );
    })
  );
};
