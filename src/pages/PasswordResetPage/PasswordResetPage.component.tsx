import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IPasswordResetPageProps } from "./PasswordResetPage.types";
import { useStyles } from "./PasswordResetPage.style";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";
import Footer from "../reusable/Footer";
import InputTextField from "../reusable/InputTextField";
import routes from "../../navigator/routes";
import CommitCode from "../SignUpPage/components/CommitCode";
import {
  emailRegExp,
  passwordRegExp,
} from "../SignUpPage/SignUpPage.component";
import ErrorMessageTypography from "../SignUpPage/components/ErrorMessageTypography";
import hashPassword from "../reusable/HashPassword/HashPassword";
import Modal from "../reusable/Modal";

const lockImage = require("../../utils/lock.png");
const successCheck = require("../../utils/successCheck.png");

const PasswordResetPage = ({
  getConfirmAddressEmail,
  getResendCodePasswordReset,
  getChangePasswordResponse,
  mountedConfirmAddressEmail,
  mountedResendCodePasswordReset,
  mountedChangePassword,
}: IPasswordResetPageProps) => {
  const { translate } = useTranslationContext();
  const translations = translate("passwordReset");
  const translationsLogin = translate("loginForm");
  const translationsSignUp = translate("signUp");

  const classes = useStyles();

  const [login, setLogin] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [code, setCode] = useState("");

  useEffect(() => {
    setValidLogin(emailRegExp.test(login));
  }, [login]);
  useEffect(() => {
    setValidPassword(passwordRegExp.test(password));
  }, [password]);

  const [next, setNext] = useState(0);

  const nextStep = () => setNext(1);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [commitMessage, setCommitMessage] = useState("");

  const [resendValid, setResendValid] = useState(true);

  useEffect(() => {
    if (getResendCodePasswordReset.status === 500) {
      setCommitMessage("");
      setErrorMessages([getResendCodePasswordReset.detail]);
    }
    if (getResendCodePasswordReset.status === 200) {
      setErrorMessages([]);
      setCommitMessage(getResendCodePasswordReset.detail);
    }

    setResendValid(true);
  }, [getResendCodePasswordReset]);

  useEffect(() => {
    if (getConfirmAddressEmail.status === 500) {
      setErrorMessages([getConfirmAddressEmail.detail]);
      setEmailSended(false);
    }
    if (getConfirmAddressEmail.status === 200) {
      nextStep();
      setErrorMessages([]);
    }
  }, [getConfirmAddressEmail]);

  const [modalPasswordIsChanged, setModalPasswordIsChanged] = useState(false);

  useEffect(() => {
    if (getChangePasswordResponse.status === 500) {
      setErrorMessages([getChangePasswordResponse.detail]);
      setPasswordSended(false);
    }
    if (getChangePasswordResponse.status === 200) {
      setModalPasswordIsChanged(true);
      window.setTimeout(backToLoginPage, 6000);
    }
  }, [getChangePasswordResponse]);

  const backToLoginPage = () => {
    window.location.replace(routes.login);
  };

  const sendChangePassword = () => {
    mountedChangePassword({
      token: getConfirmAddressEmail.token,
      code: code,
      password: hashPassword(password),
    });

    setPasswordSended(true);
  };

  const [passwordSended, setPasswordSended] = useState(false);

  const currentScreen = () => {
    switch (next) {
      case 0:
        return passwordReset();
      case 1:
        return (
          <CommitCode
            email={login}
            code={code}
            setCode={setCode}
            errorMessages={errorMessages}
            commitMessage={commitMessage}
            onResend={() => {
              mountedResendCodePasswordReset({
                token: getConfirmAddressEmail.token,
              });
              setResendValid(false);
              setErrorMessages([]);
            }}
            onSubmit={buttonNext(
              code.length === 6 && validPassword && !passwordSended,
              sendChangePassword
            )}
            resendValid={resendValid}
          >
            <InputTextField
              placeholder={translations.newPassword}
              size="medium"
              type="password"
              className={`${classes.textField} ${classes.passwordInput}`}
              value={password}
              onChange={setPassword}
              validation
              valid={validPassword}
              title={
                <div style={{ whiteSpace: "nowrap" }}>
                  <div>{translationsSignUp.passwordIsInvalid}</div>
                  <ul style={{ margin: 0 }}>
                    <li>{translationsSignUp.passwordMinLength}</li>
                    <li>{translationsSignUp.passwordRequirements}</li>
                    <li>
                      {
                        translationsSignUp.passwordWithoutSpaceAndOtherCharacters
                      }
                    </li>
                  </ul>
                </div>
              }
            />
          </CommitCode>
        );
    }
  };

  const [emailSended, setEmailSended] = useState(false);

  const sendConfirmAddressEmail = () => {
    mountedConfirmAddressEmail({ email: login });
    setEmailSended(true);
  };

  const buttonNext = (valid: boolean, onClick?: () => void) => {
    return valid ? (
      <Button
        size="medium"
        variant="contained"
        className={classes.sendCode}
        onClick={() => {
          setErrorMessages([]);
          if (onClick) {
            onClick();
          }
        }}
      >
        {translations.next}
      </Button>
    ) : (
      <Button
        size="medium"
        variant="contained"
        className={classes.sendCode}
        disabled
      >
        {translations.next}
      </Button>
    );
  };

  const passwordReset = () => (
    <>
      <Box className={classes.boxLockImage}>
        <img src={lockImage} alt={translations.lockImage} />
      </Box>
      <Typography variant="h6" textAlign={"center"}>
        {translations.troubleLogging}
      </Typography>
      <Typography className={classes.typography}>
        {translations.enterYourEmail}
      </Typography>
      <InputTextField
        placeholder={translations.email}
        size="medium"
        className={classes.textField}
        value={login}
        onChange={setLogin}
        validation
        valid={validLogin}
        title={
          <div style={{ whiteSpace: "nowrap" }}>
            {translations.addressIsInvalid}
          </div>
        }
      />
      {buttonNext(validLogin && !emailSended, sendConfirmAddressEmail)}
      <Box className={classes.separator}>
        <hr />
        <Typography fontSize="small" className={classes.orText}>
          {translationsLogin.or.toUpperCase()}
        </Typography>
      </Box>
      <Link to={routes.signUp} className={classes.link}>
        {translations.createAccount}
      </Link>
      <ErrorMessageTypography errorMessage={errorMessages} />
    </>
  );

  return (
    <>
      <Container className={classes.container}>
        <Box className={classes.forms}>{currentScreen()}</Box>
        <Box className={classes.backToLoginBox}>
          <span
            onClick={backToLoginPage}
            className={`${classes.link} ${classes.backToLoginLink}`}
          >
            {translations.backToLogin}
          </span>
        </Box>
      </Container>
      <Modal
        width={380}
        open={modalPasswordIsChanged}
        handleClose={() => {}}
        title={translations.passwordChanged}
      >
        <Box className={classes.passwordChangedImage}>
          <img src={successCheck} alt={translations.passwordChangedImage} />
        </Box>
        <Typography variant="h6" textAlign={"center"} marginBottom={1}>
          {translations.changed}
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={14}
          marginBottom={3}
          paddingX={2}
        >
          {translations.passwordChangedInfo}
        </Typography>
      </Modal>
      <Footer />
    </>
  );
};

export default PasswordResetPage;
