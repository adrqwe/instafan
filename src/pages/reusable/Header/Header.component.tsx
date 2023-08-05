import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "./Header.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import routes from "../../../navigator/routes";

const logo = require("../../../utils/logo.png");

const Header = () => {
  const classes = useStyles();
  const { translate } = useTranslationContext();
  const translations = translate("header");

  return (
    <Box className={classes.box}>
      <span className={classes.span}>
        <Link to={routes.login}>
          <img src={logo} className={classes.img} alt={translations.logo} />
        </Link>
      </span>
    </Box>
  );
};

export default Header;
