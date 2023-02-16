import { combineEpics } from "redux-observable";

import * as Transactions from "../models/transactions/epics";
import * as Products from "../models/products/epics";
import * as HomePageData from "../models/homePageData/epics";

export default combineEpics(
  Transactions.fetchTransactionsWhenMounted,
  Transactions.getTransactionWhenRequest,

  Products.fetchProductsWhenMounted,
  Products.getProductsWhenRequested,
  Products.fetchSingleProductWhenMounted,
  Products.getSingleProductWhenRequested,

  HomePageData.fetchHomePageDataWhenMounted,
  HomePageData.getHomePageDataWhenRequested
);
