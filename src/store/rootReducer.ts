import { combineReducers } from "redux";

import productsReducer from "../models/products/reducer";
import transactionReducer from "../models/transactions/reducer";
import urlReducer from "../models/url/reducer";
import homePageDataReducer from "../models/homePageData/reducer";
import signUpReducer from "../models/signUp/reducer";
import logInReducer from "../models/logIn/reducer";
import passwordResetReducer from "../models/passwordReset/reducer";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  url: urlReducer,
  products: productsReducer,
  homePageData: homePageDataReducer,
  signUp: signUpReducer,
  logInReducer: logInReducer,
  passwordReset: passwordResetReducer,
});

export default rootReducer;
