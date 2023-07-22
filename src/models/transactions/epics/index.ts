import { EMPTY as EMPTY$, from as from$, of as of$ } from "rxjs";
import {
  catchError as catchError$,
  filter as filter$,
  mergeMap as mergeMap$,
  takeUntil as takeUntil$,
  withLatestFrom as withLatestFrom$,
  tap as tap$,
} from "rxjs/operators";
import { isActionOf, isOfType } from "typesafe-actions";
import _Store from "@Store";
import { getTransactions, mounted } from "../actions";

export const fetchTransactionsWhenMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mounted)),
    mergeMap$((action) => {
      return of$(getTransactions.request("procesor"));
    })
  );
};

export const getTransactionWhenRequest: _Store.IEpic = (
  action$,
  state$,
  { transactionService }
) => {
  return action$.pipe(
    filter$(isActionOf(getTransactions.request)),
    mergeMap$((action) => {
      return from$(transactionService.getTransactions(action.payload)).pipe();
    })
  );
};
