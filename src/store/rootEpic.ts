import { combineEpics } from "redux-observable";

import * as Transactions from "../models/transactions/epics";
import * as Products from "../models/products/epics";
import * as HomePageData from "../models/homePageData/epics";
import * as SignUp from "../models/signUp/epics";

export default combineEpics(
  Transactions.fetchTransactionsWhenMounted,
  Transactions.getTransactionWhenRequest,

  Products.fetchProductsWhenMounted,
  Products.getProductsWhenRequested,
  Products.fetchSingleProductWhenMounted,
  Products.getSingleProductWhenRequested,

  HomePageData.fetchHomePageDataWhenMounted,
  HomePageData.getHomePageDataWhenRequested,

  SignUp.fetchSignUpWhenMounted,
  SignUp.getSignUpResponseWhenRequested,
  SignUp.fetchSignUpAuthTokenWhenMounted,
  SignUp.getSignUpAuthTokenWhenRequested
);
