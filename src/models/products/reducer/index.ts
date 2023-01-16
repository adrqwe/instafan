import { getType } from "typesafe-actions";
import { getProducts, getSingleProduct } from "../actions";
import { IAction, IProductsReducer } from "../types";

const initialState: IProductsReducer = {
  products: [],
  product: {},
};

const productsReducer = (
  state: IProductsReducer = initialState,
  action: IAction
): IProductsReducer => {
  switch (action.type) {
    case getType(getProducts.success):
      return {
        ...state,
        products: action.payload,
      };
    case getType(getSingleProduct.success):
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
