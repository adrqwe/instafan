import { getType } from "typesafe-actions";
import { getTransactions } from "../actions";
import { IAction } from "../types";

const initialState: any = {
  transactions: "dhfhdfs",
};

const transactionReducer = (
  state: any = initialState,
  action: IAction
): any => {
  switch (action.type) {
    case getType(getTransactions.success):
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
