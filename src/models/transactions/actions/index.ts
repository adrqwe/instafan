import { deprecated, createAsyncAction } from "typesafe-actions";
import {
  MOUNTED,
  _GET_TRANSACTIONS_FAILURE,
  _GET_TRANSACTIONS_REQUEST,
  _GET_TRANSACTIONS_SUCCESS,
} from "../constants/constants";

const { createStandardAction } = deprecated;

export const mounted = createStandardAction(MOUNTED)();

export const getTransactions = createAsyncAction(
  _GET_TRANSACTIONS_REQUEST,
  _GET_TRANSACTIONS_SUCCESS,
  _GET_TRANSACTIONS_FAILURE
)<any, any, Error>();
