import _Store from "@Store";
import { Selector } from "reselect";
import { ISingleProductSuccessPayload } from "../types";

export const getSingleProduct: Selector<
  _Store.IState,
  ISingleProductSuccessPayload | {}
> = (state) => state.products.product;
