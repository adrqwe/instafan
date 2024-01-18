import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { ISignUpPageProps } from "./SignUpPage.types";
import { useStyles } from "./SignUpPage.style";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";
import Header from "../reusable/Header";
import InputTextField from "../reusable/InputTextField";
import Footer from "../reusable/Footer";
import Modal from "../reusable/Modal";
import Select from "../reusable/Select";
import useMonthTranslate from "../reusable/Month/Month";
import hashPassword from "../reusable/HashPassword/HashPassword";
import routes from "../../navigator/routes";
import ErrorMessageTypography from "./components/ErrorMessageTypography";
import ReportText from "./components/ReportText";
import CommitCode from "./components/CommitCode";

const birthdayImage = require("../../utils/birthdayImage.png");
const accountAdded = require("../../utils/accountAdded.png");

export const passwordRegExp = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(){};:',.<>?+=`~|/_])[A-Za-z\d!@#$%^&*(){};:',.<>?+=`~|/_]{8,}$/
);
export const emailRegExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const usernameRegExp = new RegExp(/^[a-zA-Z0-9]{4,}$/);

const SignUpPage = ({
  getSignUpResponse,
  getAuthToken,
  getCommitCodeResponse,
  getResendResponse,
  mountedSignUp,
  mountedCheckSignUp,
  mountedConfirmCodeSignUp,
  mountedResendCodeSignUp,
}: ISignUpPageProps) => {
  const monthsTranslate = useMonthTranslate();
  const { translate } = useTranslationContext();
  const translations = translate("signUp");
  const translationsFooter = translate("footer");

  const classes = useStyles();

  const [login, setLogin] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [signUpDataValid, setSignUpDataValid] = useState(false);

  const sendCheckSignUpData = () => {
    if (validLogin && fullName && validUsername && validPassword) {
      mountedCheckSignUp({
        email: login,
        fullName: fullName,
        username: username,
        password: hashPassword(password),
      });
    }
  };
  const sendSignUpData = () => {
    if (validLogin && fullName && validUsername && validPassword) {
      mountedSignUp({
        email: login,
        fullName: fullName,
        username: username,
        password: hashPassword(password),
        birthday: `${day < 10 ? `0${day}` : day}-${moment()
          .month(month)
          .format("MM")}-${year}`,
      });
    }
  };

  useEffect(() => {
    if (getSignUpResponse.status === 200) {
      let errors: string[] = [];
      if (
        "email" in getSignUpResponse.detail &&
        getSignUpResponse.detail.email.status === "bad"
      ) {
        errors.push(getSignUpResponse.detail.email.message);
        setValidLogin(false);
      }
      if (
        "password" in getSignUpResponse.detail &&
        getSignUpResponse.detail.password.status === "bad"
      ) {
        errors.push(getSignUpResponse.detail.password.message);
        setValidPassword(false);
      }
      if (
        "username" in getSignUpResponse.detail &&
        getSignUpResponse.detail.username.status === "bad"
      ) {
        errors.push(getSignUpResponse.detail.username.message);
        setValidUsername(false);
      }
      if (
        "fullname" in getSignUpResponse.detail &&
        getSignUpResponse.detail.fullname.status === "bad"
      ) {
        errors.push(getSignUpResponse.detail.fullname.message);
        setFullName("");
      }
      setSignUpDataValid(getSignUpResponse.valid);
      setErrorMessages(errors);
    }
  }, [getSignUpResponse]);

  useEffect(() => {
    setValidLogin(emailRegExp.test(login));
  }, [login]);
  useEffect(() => {
    setValidPassword(passwordRegExp.test(password));
  }, [password]);
  useEffect(() => {
    setValidUsername(usernameRegExp.test(username));
  }, [username]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      sendCheckSignUpData();
    }, 1000);

    setSignUpDataValid(false);
    return () => {
      clearTimeout(timeout);
    };
  }, [login, username, fullName, password]);

  const [modalStatus, setModalStatus] = useState(false);
  const closeModal = () => setModalStatus(false);
  const openModal = () => setModalStatus(true);
  const [month, setMonth] = useState(
    moment.months()[moment().month()].toLowerCase()
  );
  const [day, setDay] = useState(1);
  const [dayList, setDayList] = useState<any>({ 1: 1 });
  const [year, setYear] = useState(moment().year() - 7);
  const years = () => {
    const currentYear = moment().year() - 7;
    let dict: any = {};
    for (let i = currentYear; i > currentYear - 100; i--) {
      dict[i] = i;
    }
    return dict;
  };
  const days = (days: number) => {
    let dict: any = {};
    for (let i = 1; i <= days; i++) {
      dict[i] = i;
    }
    return dict;
  };
  useEffect(() => {
    let daysInMonth = moment(`${year}${month}`, "YYYYMMMM").daysInMonth();
    setDayList(days(daysInMonth));
  }, [month, year]);

  const [next, setNext] = useState(0);

  const nextStep = () => setNext(next + 1);

  const [code, setCode] = useState("");

  const sendConfirmEmailCode = () => {
    mountedConfirmCodeSignUp({ code: code, token: getAuthToken.token });
  };

  const currentScreen = () => {
    switch (next) {
      case 0:
        return signUp();
      case 1:
        return birthDay();
      case 2:
        return (
          <CommitCode
            email={login}
            code={code}
            errorMessages={commitError}
            commitMessage={commitSuccess}
            onResend={resend}
            setCode={setCode}
            onSubmit={buttonCommit(code.length === 6, sendConfirmEmailCode)}
            backButton={buttonBack}
          />
        );
    }
  };

  useEffect(() => {
    let array = [getSignUpResponse, getAuthToken];

    array.map(({ status, detail }) => {
      if (status === 500) {
        setErrorMessages([detail]);

        if (next !== 0) {
          setPassword("");
        }

        return setNext(0);
      }
      return null;
    });
  }, [getSignUpResponse, getAuthToken]);

  const [commitError, setCommitError] = useState<string[]>([]);
  const [commitSuccess, setCommitSuccess] = useState("");

  const [modalAccountCreate, setModalAccountCreate] = useState(false);

  const backToLoginPage = () => {
    window.location.replace(routes.login);
  };

  useEffect(() => {
    if (getCommitCodeResponse.status === 500) {
      setCommitError([getCommitCodeResponse.detail]);
    }
    if (getCommitCodeResponse.status === 200) {
      setModalAccountCreate(true);
      window.setTimeout(backToLoginPage, 6000);
    }
  }, [getCommitCodeResponse]);

  const resend = () => {
    setCommitError([]);
    setCommitSuccess(getResendResponse.detail);
    mountedResendCodeSignUp({ token: getAuthToken.token });
  };

  useEffect(() => {
    if (getResendResponse.status === 500) {
      setCommitError([getResendResponse.detail]);
      setCommitSuccess("");
    }
    if (getResendResponse.status === 200) {
      setCommitError([]);
      setCommitSuccess(getResendResponse.detail);
    }
  }, [getResendResponse]);

  const buttonNext = (valid: boolean, onClick?: () => void) => {
    return valid ? (
      <Button
        size="medium"
        variant="contained"
        className={classes.nextButton}
        onClick={() => {
          nextStep();
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
        className={classes.nextButton}
        disabled
      >
        {translations.next}
      </Button>
    );
  };

  const buttonCommit = (valid: boolean, onClick?: () => void) => {
    return valid ? (
      <Button
        size="medium"
        variant="contained"
        className={classes.nextButton}
        onClick={() => {
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
        className={classes.nextButton}
        disabled
      >
        {translations.next}
      </Button>
    );
  };

  const buttonBack = () => {
    return (
      <Button
        size="medium"
        variant="text"
        className={`${classes.nextButton} ${classes.backButton}`}
        onClick={() => {
          setPassword("");
          setNext(0);
          setCode("");
          setCommitError([]);
          setCommitSuccess("");
        }}
      >
        {translations.back}
      </Button>
    );
  };

  const birthDay = () => (
    <span>
      <Box className={classes.boxBirthdayImage}>
        <img src={birthdayImage} alt={translations.birthdayImage} />
      </Box>
      <Typography
        className={classes.birthdayTypography}
        fontWeight={"bold"}
        marginBottom={2}
      >
        {translations.addYourBirthday}
      </Typography>
      <Typography className={classes.birthdayTypography}>
        {translations.yourPublicProfile}
      </Typography>
      <span onClick={openModal}>
        <Typography
          className={`${classes.birthdayTypography} ${classes.modalOpenLink} ${classes.noSelect}`}
        >
          {translations.whyBirthday}
        </Typography>
      </span>
      <span className={classes.selects}>
        <Select options={monthsTranslate} value={month} onChange={setMonth} />
        <Select options={dayList} value={day} onChange={setDay} />
        <Select options={years()} value={year} onChange={setYear} />
      </span>
      <Typography className={classes.typography} marginBottom={1}>
        {translations.youNeedEnterBorn}
      </Typography>
      <Typography className={classes.typography} marginBottom={1}>
        {translations.realDate}
      </Typography>
      {buttonNext(true, sendSignUpData)}
      {buttonBack()}
    </span>
  );

  const signUp = () => (
    <>
      <Header />
      <Typography className={classes.signUpTo} textAlign={"center"}>
        {translations.signUpTo}
      </Typography>
      <Box component="form" className={classes.boxForm}>
        <InputTextField
          placeholder={translations.login}
          size="medium"
          className={classes.textField}
          value={login}
          onChange={setLogin}
          validation
          valid={validLogin}
          onBlur={sendCheckSignUpData}
          title={
            <div style={{ whiteSpace: "nowrap" }}>
              {translations.addressIsInvalid}
            </div>
          }
        />
        <InputTextField
          placeholder={translations.fullName}
          size="medium"
          className={classes.textField}
          value={fullName}
          onChange={setFullName}
          validation
          valid
          onBlur={sendCheckSignUpData}
        />
        <InputTextField
          placeholder={translations.username}
          size="medium"
          className={classes.textField}
          value={username}
          onChange={setUsername}
          validation
          valid={validUsername}
          onBlur={sendCheckSignUpData}
          title={
            <div style={{ whiteSpace: "nowrap" }}>
              <div>{translations.usernameIsInvalid}</div>
              <ul style={{ margin: 0 }}>
                <li>{translations.usernameMinLength}</li>
                <li>{translations.withoutSpecialCharacters}</li>
                <li>{translations.withoutWhiteSpace}</li>
              </ul>
            </div>
          }
        />
        <InputTextField
          placeholder={translations.password}
          size="medium"
          className={classes.textField}
          value={password}
          onChange={setPassword}
          type="password"
          validation
          valid={validPassword}
          onBlur={sendCheckSignUpData}
          title={
            <div style={{ whiteSpace: "nowrap" }}>
              <div>{translations.passwordIsInvalid}</div>
              <ul style={{ margin: 0 }}>
                <li>{translations.passwordMinLength}</li>
                <li>{translations.passwordRequirements}</li>
                <li>{translations.passwordWithoutSpaceAndOtherCharacters}</li>
              </ul>
            </div>
          }
        />
        <Typography className={classes.typography}>
          {translations.peopleWhoUse}
          <br />
          <Link to="" className={`${classes.link} `}>
            {translations.learnMore}
          </Link>
        </Typography>
        <Typography className={classes.typography}>
          {translations.agreeTerms}{" "}
          <Link to="" className={`${classes.link} `}>
            {translationsFooter.terms}.
          </Link>{" "}
          {translations.cookiesInformation}
        </Typography>
        {buttonNext(signUpDataValid)}
        <ErrorMessageTypography errorMessage={errorMessages} />
        <ReportText />
      </Box>
    </>
  );

  return (
    <>
      <Container
        className={`${classes.container} ${
          next !== 0 && classes.containerMarginForSmallBox
        }`}
      >
        <Box className={classes.forms}>{currentScreen()}</Box>
        <Modal
          width={380}
          open={modalStatus}
          handleClose={closeModal}
          title={translations.birthdays}
          footer={
            <Typography
              fontWeight={"bold"}
              className={`${classes.birthdayTypography} ${classes.modalOpenLink} ${classes.modalFooter} ${classes.noSelect}`}
            >
              {translations.learnMore}
            </Typography>
          }
        >
          <Box className={classes.boxBirthdayImage}>
            <img src={birthdayImage} alt={translations.birthdayImage} />
          </Box>
          <Typography variant="h6" textAlign={"center"} marginBottom={1}>
            {translations.birthdaysOn}
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={14}
            marginBottom={3}
            paddingX={2}
          >
            {translations.communitySafe}
          </Typography>
        </Modal>
        <Modal
          width={380}
          open={modalAccountCreate}
          handleClose={() => {}}
          title={translations.accountCreated}
        >
          <Box className={classes.boxBirthdayImage}>
            <img src={accountAdded} alt={translations.birthdayImage} />
          </Box>
          <Typography variant="h6" textAlign={"center"} marginBottom={1}>
            {translations.welcome}
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={14}
            marginBottom={3}
            paddingX={2}
          >
            {translations.accountCratedInfo}
          </Typography>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpPage;
