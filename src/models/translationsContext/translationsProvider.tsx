import React, { FC, useState } from "react";
import { TransactionContext } from "./translationsContext";

import {
  EN_translations,
  PL_translations,
  TAvailableLanguage,
  TTranslation,
} from "./mapTranslations";

export interface ITransactionContextProps {
  activeLanguage: TAvailableLanguage;
}

export const TransactionsProvider: FC<{
  value?: ITransactionContextProps;
  children: React.ReactNode;
}> = ({ children, value }) => {
  const [activeLanguage, setActiveLanguage] = useState<TAvailableLanguage>(
    value?.activeLanguage || "EN"
  );

  const getLangMap = (): TTranslation["translations"] => {
    switch (activeLanguage) {
      case "EN":
        return EN_translations.translations;
      case "PL":
        return PL_translations.translations;

      default:
        return EN_translations.translations;
    }
  };

  const langMap = getLangMap();

  const translate = <K extends keyof TTranslation["translations"]>(key: K) =>
    langMap[key];
  return (
    <TransactionContext.Provider value={{ translate }}>
      {children}
    </TransactionContext.Provider>
  );
};
