import { EN_translations } from "../models/translationsContext/mapTranslations";
import { LIST_OF_THEME } from "../theme";
import { api } from "./api";
import { IConfig, listOfActiveLanguage, listOfActiveTheme } from "./types";

const getFromLocalStorage = (item: string, arrayToTest: string[]) => {
  let localStorageItem: string | null = null;
  try {
    localStorageItem = localStorage.getItem(item);

    if (!arrayToTest.find((e) => e === localStorageItem)) {
      localStorageItem = null;
    }
  } catch {
    localStorageItem = null;
  }
  return localStorageItem;
};

let selectedLanguage = getFromLocalStorage(
  "selectedLanguage",
  Object.keys(EN_translations.availableLanguages)
);

let selectedTheme = getFromLocalStorage(
  "selectedTheme",
  Object.keys(LIST_OF_THEME.availableThemes)
);

const config: IConfig = {
  api,
  defaultPartner: 1,
  activeLanguage: `${
    selectedLanguage ? (selectedLanguage as listOfActiveLanguage) : "PL"
  }`,
  activeTheme: `${
    selectedTheme ? (selectedTheme as listOfActiveTheme) : "lightTheme"
  }`,
  secret: process.env.REACT_APP_SECRET,
  ivKey: process.env.REACT_APP_IVKEY,
};

export default config;
