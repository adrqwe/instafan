import { EN_translations } from "../models/translationsContext/mapTranslations";
import { api } from "./api";
import { IConfig, listOfActiveLanguage } from "./types";

let selectedLanguage: string | null = null;
try {
  selectedLanguage = localStorage.getItem("selectedLanguage");

  if (
    !Object.keys(EN_translations.availableLanguages).find(
      (e) => e === selectedLanguage
    )
  ) {
    selectedLanguage = null;
  }
} catch {
  selectedLanguage = null;
}

const config: IConfig = {
  api,
  defaultPartner: 1,
  activeLanguage: `${
    selectedLanguage ? (selectedLanguage as listOfActiveLanguage) : "PL"
  }`,
  secret: process.env.REACT_APP_SECRET,
  ivKey: process.env.REACT_APP_IVKEY,
};
export default config;
