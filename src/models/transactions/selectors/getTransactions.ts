import _Store from "@Store";
import { Selector } from "reselect";

export const getTransactions: Selector<_Store.IState, any> = (state) =>
  state.transactions.transactions;
