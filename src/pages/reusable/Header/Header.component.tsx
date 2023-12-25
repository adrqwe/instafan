import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "./Header.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import routes from "../../../navigator/routes";
import { IHeaderProps } from "./Header.types";

const logo = require("../../../utils/logo.png");
const logoWithoutText = require("../../../utils/logoWithoutText.png");

const Header = ({ margin, changeToIcon = false, className }: IHeaderProps) => {
  const classes = useStyles();
  const { translate } = useTranslationContext();
  const translations = translate("header");

  return (
    <Box className={`${classes.box} ${className}`} style={{ margin: margin }}>
      <span className={classes.span}>
        <Link to={routes.homePage}>
          <img
            style={{ display: `${!changeToIcon && "inline-block"}` }}
            src={logo}
            className={classes.img}
            alt={translations.logo}
            draggable={false}
          />
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
