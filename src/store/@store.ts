import { Epic } from "redux-observable";
import { StateType } from "typesafe-actions";
// Import root reducer
import rootReducer from "./rootReducer";
// Import services
import { IServices } from "./services";
// Import model actions
/* @@STORE_COMPONENT@@ */
import { IAction as ITransactionsAction } from "./../models/transactions/types";
import { IAction as IUrlAction } from "./../models/url/types";
import { IAction as IProductsAction } from "./../models/products/types";
import { IAction as IHomePageDataAction } from "../models/homePageData/types";
import { IAction as ISignUpAction } from "../models/signUp/types";
import { IAction as ILogInAction } from "../models/logIn/types";
import { IAction as IPasswordResetAction } from "../models/passwordReset/types";

declare module "@Store" {
  export type IState = StateType<typeof rootReducer>;
  /* @@STORE_COMPONENT@@ */
  export type IAction =
    | ITransactionsAction
    | IUrlAction
    | IProductsAction
    | IHomePageDataAction
    | ISignUpAction
    | ILogInAction
    | IPasswordResetAction;

  export type IService = IServices;
  export type IEpic = Epic<IAction, IAction, IState, IService>;
}
