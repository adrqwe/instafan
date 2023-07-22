import { Box, Button, Checkbox, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ILoginFormProps } from "./LoginForm.types";
import { useStyles } from "./LoginForm.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import InputTextField from "../InputTextField";
import Header from "../Header";

const LoginForm = ({}: ILoginFormProps) => {
  const classes = useStyles();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { translate } = useTranslationContext();
  const translations = translate("loginForm");

  return (
    <Box component="form" className={classes.form}>
      <Header />
      <InputTextField
        placeholder={translations.login}
        size="medium"
        className={classes.textField}
        value={login}
        onChange={setLogin}
      />
      <InputTextField
        placeholder={translations.password}
        size="medium"
        className={classes.textField}
        value={password}
        onChange={setPassword}
        type="password"
      />
      <Box className={classes.checkbox}>
        <Checkbox size="small" />
        <Typography fontSize="small">{translations.saveYourLogin}</Typography>
      </Box>
      <Button
        size="medium"
        variant="contained"
        className={classes.submitButton}
        type="submit"
      >
        {translations.logIn}
      </Button>
      <Box className={classes.separator}>
        <hr />
        <Typography fontSize="small" className={classes.orText}>
          {translations.or.toUpperCase()}
        </Typography>
      </Box>
      <Box className={classes.boxWithLink}>
        <Link to="/search" className={classes.link}>
          {translations.forgotPassword}
        </Link>
      </Box>
      <Box className={classes.report}>
        <Typography fontSize="small">
          {translations.reportTextStart}{" "}
          <Link
            to="/search"
            className={`${classes.link} ${classes.reportLink}`}
          >
            {translations.reportLinkText}
          </Link>{" "}
          {translations.reportTextEnd}
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
