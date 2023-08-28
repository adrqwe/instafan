import { combineEpics } from "redux-observable";

import * as Transactions from "../models/transactions/epics";
import * as Products from "../models/products/epics";
import * as HomePageData from "../models/homePageData/epics";
import * as SignUp from "../models/signUp/epics";
import * as LogIn from "../models/logIn/epics";
import * as PasswordReset from "../models/passwordReset/epics";

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
  SignUp.getSignUpAuthTokenWhenRequested,
  SignUp.fetchCommitCodeSignUpWhenMounted,
  SignUp.getCommitCodeSignUpWhenRequested,
  SignUp.fetchResendCodeSignUpWhenMounted,
  SignUp.getResendCodeSignUpWhenRequested,

  LogIn.fetchLogInWhenMounted,
  LogIn.getLogInResponseWhenRequested,

  PasswordReset.fetchConfirmAddressEmailWhenMounted,
  PasswordReset.getConfirmAddressEmailResponseWhenRequested,
  PasswordReset.fetchResendCodeWhenMounted,
  PasswordReset.getResendCodeResponseWhenRequested,
  PasswordReset.fetchChangePasswordWhenMounted,
  PasswordReset.getChangePasswordResponseWhenRequested
);
