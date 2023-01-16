import { EN_translations } from "./EN_translations";
import { PL_translations } from "./PL_translations";

export type TTranslation = typeof EN_translations;
export type TAvailableLanguage =
  keyof typeof EN_translations.availableLanguages;

export { PL_translations, EN_translations };
