import { deprecated, createAsyncAction } from "typesafe-actions";
import {
  MOUNTED,
  _GET_PRODUCTS_REQUEST,
  _GET_PRODUCTS_SUCCESS,
  _GET_PRODUCTS_FAILURE,
  _REQUEST_FOR_SINGLE_PRODUCT,
  _GET_SINGLE_PRODUCT_REQUEST,
  _GET_SINGLE_PRODUCT_FAILURE,
  _GET_SINGLE_PRODUCT_SUCCESS,
} from "../constants/constants";
import {
  IProductsSuccessPayload,
  ISingleProductSuccessPayload,
} from "../types";

const { createStandardAction } = deprecated;

export const mounted = createStandardAction(MOUNTED)();

export const requestForSingleProduct = createStandardAction(
  _REQUEST_FOR_SINGLE_PRODUCT
)<string>();

export const getProducts = createAsyncAction(
  _GET_PRODUCTS_REQUEST,
  _GET_PRODUCTS_SUCCESS,
  _GET_PRODUCTS_FAILURE
)<number, IProductsSuccessPayload[], Error>();

export const getSingleProduct = createAsyncAction(
  _GET_SINGLE_PRODUCT_REQUEST,
  _GET_SINGLE_PRODUCT_SUCCESS,
  _GET_SINGLE_PRODUCT_FAILURE
)<string, ISingleProductSuccessPayload, Error>();
