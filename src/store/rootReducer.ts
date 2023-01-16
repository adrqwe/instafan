import { combineReducers } from "redux";
import productsReducer from "../models/products/reducer";
import transactionReducer from "../models/transactions/reducer";
import urlReducer from "../models/url/reducer";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  url: urlReducer,
  products: productsReducer,
});
export default rootReducer;
