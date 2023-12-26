import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "./Footer.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import config from "../../../config";
import { EN_translations } from "../../../models/translationsContext/mapTranslations";
import Select from "./components/Select";
import { LIST_OF_THEME } from "../../../theme";
import { listOfActiveTheme } from "../../../config/types";

const Footer = () => {
  const classes = useStyles();
  const { translate } = useTranslationContext();
  const translations = translate("footer");

  const listOfThemeObject = () => {
    let newListOfTheme = LIST_OF_THEME.availableThemes;

    Object.keys(LIST_OF_THEME.availableThemes).map(
      (e: string) =>
        (newListOfTheme[e as listOfActiveTheme] =
          translations[e as listOfActiveTheme])
    );

    return newListOfTheme;
  };

  return (
    <>
      <Box className={classes.box}>
        <Link to="" className={classes.link}>
          {translations.about}
        </Link>
        <Link to="" className={classes.link}>
          {translations.blog}
        </Link>
        <Link to="" className={classes.link}>
          {translations.help}
        </Link>
        <Link to="" className={classes.link}>
          {translations.privacy}
        </Link>
        <Link to="" className={classes.link}>
          {translations.terms}
        </Link>
        <Link to="" className={classes.link}>
          {translations.topAccounts}
        </Link>

        <Select
          localStorageName="selectedLanguage"
          selectedVisibleValue={
            EN_translations.availableLanguages[config.activeLanguage]
          }
          ariaLabel={translations.nameOfSelect}
          defaultValue={config.activeLanguage}
          selectKeys={Object.keys(EN_translations.availableLanguages)}
          fullObject={EN_translations.availableLanguages}
        />
        <Select
          localStorageName="selectedTheme"
          selectedVisibleValue={translations[config.activeTheme]}
          ariaLabel={translations.nameOfSelectTheme}
          defaultValue={config.activeTheme}
          selectKeys={Object.keys(LIST_OF_THEME.availableThemes)}
          fullObject={listOfThemeObject()}
        />
      </Box>
      <div className={classes.by}>{translations.credits}</div>
    </>
  );
};

export default Footer;
