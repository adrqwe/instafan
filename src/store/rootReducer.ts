import { combineReducers } from "redux";

import homePageDataReducer from "../models/homePageData/reducer";
import signUpReducer from "../models/signUp/reducer";
import logInReducer from "../models/logIn/reducer";
import passwordResetReducer from "../models/passwordReset/reducer";
import loaderReducer from "../models/loader/reducer";
import postsReducer from "../models/posts/reducer";

const rootReducer = combineReducers({
  homePageData: homePageDataReducer,
  signUp: signUpReducer,
  logInReducer: logInReducer,
  passwordReset: passwordResetReducer,
  loader: loaderReducer,
  posts: postsReducer,
});

export default rootReducer;
