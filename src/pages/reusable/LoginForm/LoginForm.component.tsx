import { Box, Button, Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

import { ILoginFormProps } from "./LoginForm.types";
import { useStyles } from "./LoginForm.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import InputTextField from "../InputTextField";
import Header from "../Header";
import hashPassword from "../HashPassword/HashPassword";
import ErrorMessageTypography from "../../SignUpPage/components/ErrorMessageTypography";
import routes from "../../../navigator/routes";
import ReportText from "../../SignUpPage/components/ReportText";

const LoginForm = ({ getLogInDetails, mountedLogIn }: ILoginFormProps) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { translate } = useTranslationContext();
  const translations = translate("loginForm");

  const sendLogIn = () => {
    mountedLogIn({
      email: login,
      password: hashPassword(password),
      savaLogInDetails: saveLoginDetails,
    });
  };

  const logInButton = (valid: boolean) => {
    return valid ? (
      <Button
        size="medium"
        variant="contained"
        className={classes.submitButton}
        onClick={sendLogIn}
        type="submit"
      >
        {translations.logIn}
      </Button>
    ) : (
      <Button
        size="medium"
        variant="contained"
        className={`${classes.submitButton} ${classes.submitButtonDisable}`}
        disabled
      >
        {translations.logIn}
      </Button>
    );
  };

  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [saveLoginDetails, setSaveLoginDetails] = useState(false);

  useEffect(() => {
    if (getLogInDetails.status === 500) {
      setErrorMessages([getLogInDetails.detail]);
    }
    if (getLogInDetails.status === 200) {
      if (saveLoginDetails) {
        localStorage.setItem("access_token", getLogInDetails.token);
      } else {
        localStorage.setItem("access_token", "");
      }
      navigate(routes.homePage);
    }
  }, [getLogInDetails]);

  return (
    <form
      className={classes.form}
      autoComplete="on"
      action="javascript:void(0);"
    >
      <Header margin="50px 0" />
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
        <Checkbox
          size="small"
          value={saveLoginDetails}
          onChange={() => {
            setSaveLoginDetails(!saveLoginDetails);
          }}
          icon={
            <CheckBoxOutlineBlankOutlinedIcon
              className={classes.checkboxIcon}
            />
          }
        />
        <Typography fontSize="small">{translations.saveYourLogin}</Typography>
      </Box>
      {logInButton(login.length >= 4 && password.length >= 8)}
      <Box className={classes.separator}>
        <hr />
        <Typography fontSize="small" className={classes.orText}>
          {translations.or.toUpperCase()}
        </Typography>
      </Box>
      <Box className={classes.boxWithLink}>
        <Link to={routes.passwordReset} className={classes.link}>
          {translations.forgotPassword}
        </Link>
      </Box>
      <Box className={classes.errorMessages}>
        <ErrorMessageTypography errorMessage={errorMessages} />
      </Box>
      <Box className={classes.report}>
        <ReportText />
      </Box>
    </form>
  );
};

export default LoginForm;
