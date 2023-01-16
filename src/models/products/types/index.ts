import { ActionType, StateType } from "typesafe-actions";
import * as actions from "./../actions";

export interface IProductsSuccessPayload {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  price: number;
  size?: null;
  weight?: null;
  calories?: null;
  type: ITypes;
  category_ids: number[];
  partner_id: number;
  created_at: string;
  updated_at: string;
  rules_ids: number[];
}

export enum ITypes {
  service = "service",
  product = "product",
}
export interface IRules {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  days: string[];
  startTime: string;
  endTime: string;
  minutesInterval: number;
  partner_id: number;
  created_at: string;
  updated_at: string;
}

export type IAction = ActionType<typeof actions>;

export interface IProductsReducer {
  products: IProductsSuccessPayload[];
  product: ISingleProductSuccessPayload | {};
}
export interface ISingleProductSuccessPayload {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  size?: null;
  weight?: null;
  calories?: null;
  type: ITypes;
  partner_id: number;
  category_ids: number[];
  rules_ids: IRules[];
}
