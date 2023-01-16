import { combineEpics } from "redux-observable";
// Import modules
import * as Transactions from "../models/transactions/epics";
import * as Products from "../models/products/epics";

export default combineEpics(
  Transactions.fetchTransactionsWhenMounted,
  Transactions.getTransactionWhenRequest,

  Products.fetchProductsWhenMounted,
  Products.getProductsWhenRequested,
  Products.fetchSingleProductWhenMounted,
  Products.getSingleProductWhenRequested
);
