import { ActionType, StateType } from "typesafe-actions";
import * as actions from "./../actions";

export interface IUrlReducer {
  url: string;
}

export type IAction = ActionType<typeof actions>;
