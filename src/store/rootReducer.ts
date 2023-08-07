import { combineReducers } from "redux";

import productsReducer from "../models/products/reducer";
import transactionReducer from "../models/transactions/reducer";
import urlReducer from "../models/url/reducer";
import homePageDataReducer from "../models/homePageData/reducer";
import signUpReducer from "../models/signUp/reducer";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  url: urlReducer,
  products: productsReducer,
  homePageData: homePageDataReducer,
  signUp: signUpReducer,
});

export default rootReducer;
