import { createTheme } from "@mui/material/styles";

import { listOfActiveTheme } from "../config/types";

const darkTheme = createTheme({
  palette: {
    secondary: {
      main: "#000",
      light: "#fff",
    },
    grey: {
      50: "#000",
      100: "#E6E6E6",
      200: "#E6E6E6",
      300: "#E6E6E6",
      400: "#E6E6E6",
      500: "#E6E6E6",
      600: "#E6E6E6",
      700: "#E6E6E6",
      900: "#E6E6E6",
      A200: "rgba(100,100,100,0.25)",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    secondary: {
      main: "#fff",
      light: "#000",
    },
    info: {
      main: "#0099FF",
      light: "#00c8fa",
      dark: "#00376b",
    },
    grey: {
      100: "#E6E6E6",
      200: "#dbdbdb",
      300: "#c8c8c8",
      400: "#969696",
      500: "#8c8c8c",
      600: "#808080",
      700: "#646464",
      900: "#262626",
      A100: "rgba(0,0,0,0.2)",
      A200: "rgba(100,100,100,0.25)",
    },
  },
});

export const LIST_OF_THEME = {
  availableThemes: {
    darkTheme: "Dark Theme",
    lightTheme: "Light Theme",
  },
  themes: {
    lightTheme,
    darkTheme,
  },
};

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

let selectedTheme = getFromLocalStorage(
  "selectedTheme",
  Object.keys(LIST_OF_THEME.availableThemes)
);

export const theme =
  LIST_OF_THEME.themes[
    selectedTheme ? (selectedTheme as listOfActiveTheme) : "lightTheme"
  ];
