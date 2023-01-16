import { Box, Typography, Container } from "@mui/material";

import { useStyles } from "./Header.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";

const logo = require("../../../utils/logo.png");

const Header = () => {
  const classes = useStyles();
  const { translate } = useTranslationContext();
  const translations = translate("header");

  return (
    <Box className={classes.box}>
      <img src={logo} className={classes.img} alt={translations.logo} />
    </Box>
  );
};

export default Header;
