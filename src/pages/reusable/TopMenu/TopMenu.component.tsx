import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useStyles } from "./TopMenu.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import routes from "../../../navigator/routes";
import Header from "../Header";

const TopMenu = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { translate } = useTranslationContext();
  const translationsLoginForm = translate("loginForm");
  const translationsLoginPage = translate("loginPage");

  return (
    <Box className={classes.containerMenu}>
      <Box className={classes.header}>
        <Header margin="5px 0" />
      </Box>
      <span className={classes.leftButtons}>
        <Button
          size="small"
          variant="contained"
          className={classes.submitButton}
          onClick={() => navigate(routes.login)}
        >
          {translationsLoginForm.logIn}
        </Button>
        <Button
          size="small"
          variant="outlined"
          className={classes.submitButton}
          onClick={() => navigate(routes.signUp)}
        >
          {translationsLoginPage.signUp}
        </Button>
      </span>
    </Box>
  );
};

export default TopMenu;
