import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useStyles } from "./Footer.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import config from "../../../config";
import { EN_translations } from "../../../models/translationsContext/mapTranslations";
import { listOfActiveLanguage } from "../../../config/types";

const Footer = () => {
  const classes = useStyles();
  const { translate } = useTranslationContext();
  const translations = translate("footer");

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
        <span className={classes.selectBox}>
          {EN_translations.availableLanguages[config.activeLanguage]}
          <KeyboardArrowDownIcon className={classes.arrowIcon} />
          <select
            onChange={(e) => {
              console.log(e.target.value);
              localStorage.setItem("selectedLanguage", e.target.value);
              window.location.reload();
            }}
            aria-label={translations.nameOfSelect}
            className={classes.languageSelect}
            defaultValue={config.activeLanguage}
          >
            {Object.keys(EN_translations.availableLanguages).map(
              (key: string, index: number) => {
                return (
                  <option key={index} value={key}>
                    {
                      EN_translations.availableLanguages[
                        key as listOfActiveLanguage
                      ]
                    }
                  </option>
                );
              }
            )}
          </select>
        </span>
      </Box>
      <div className={classes.by}>{translations.credits}</div>
    </>
  );
};

export default Footer;
