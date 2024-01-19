import { Epic } from "redux-observable";
import { StateType } from "typesafe-actions";

import rootReducer from "./rootReducer";
import { IServices } from "./services";

import { IAction as IHomePageDataAction } from "../models/homePageData/types";
import { IAction as ISignUpAction } from "../models/signUp/types";
import { IAction as ILogInAction } from "../models/logIn/types";
import { IAction as IPasswordResetAction } from "../models/passwordReset/types";
import { IAction as ILoaderAction } from "../models/loader/types";
import { IAction as IPostsAction } from "../models/posts/types";

declare module "@Store" {
  export type IState = StateType<typeof rootReducer>;

  export type IAction =
    | IHomePageDataAction
    | ISignUpAction
    | ILogInAction
    | IPasswordResetAction
    | ILoaderAction
    | IPostsAction;

  export type IService = IServices;
  export type IEpic = Epic<IAction, IAction, IState, IService>;
}
