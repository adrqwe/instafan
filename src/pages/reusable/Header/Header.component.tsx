import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "./Header.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import routes from "../../../navigator/routes";
import { IHeaderProps } from "./Header.types";
import config from "../../../config";

const logoLightTheme = require(`../../../utils/logoLightTheme.png`);
const logoDarkTheme = require(`../../../utils/logoDarkTheme.png`);
const logoWithoutText = require("../../../utils/logoWithoutText.png");

const Header = ({ margin, changeToIcon = false, className }: IHeaderProps) => {
  const classes = useStyles();
  const { translate } = useTranslationContext();
  const translations = translate("header");

  return (
    <Box className={`${classes.box} ${className}`} style={{ margin: margin }}>
      <span className={classes.span}>
        <Link to={routes.homePage}>
          {config.activeTheme === "lightTheme" ? (
            <img
              style={{ display: `${!changeToIcon && "inline-block"}` }}
              src={logoLightTheme}
              className={classes.img}
              alt={translations.logo}
              draggable={false}
            />
          ) : (
            <img
              style={{ display: `${!changeToIcon && "inline-block"}` }}
              src={logoDarkTheme}
              className={classes.img}
              alt={translations.logo}
              draggable={false}
            />
          )}

          <img
            style={{ display: `${!changeToIcon && "none"}` }}
            src={logoWithoutText}
            className={classes.imgWithoutText}
            alt={translations.logo}
            draggable={false}
          />
        </Link>
      </span>
    </Box>
  );
};

export default Header;
