import _Store from "@Store";
import { Selector } from "reselect";
import { IProductsSuccessPayload } from "../types";

export const getProducts: Selector<_Store.IState, IProductsSuccessPayload[]> = (
  state
) => state.products.products;
