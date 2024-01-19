import { createContext, useContext } from "react";

import { TTranslation } from "./mapTranslations";

interface ITransactionsContext {
  translate: <K extends keyof TTranslation["translations"]>(
    key: K
  ) => TTranslation["translations"][typeof key];
}

export const TransactionContext = createContext<
  ITransactionsContext | undefined
>(undefined);

export const useTranslationContext = () => {
  const ctx = useContext(TransactionContext);

  if (ctx === undefined)
    throw new Error(`No provider for TransactionContext given`);
  return ctx;
};
