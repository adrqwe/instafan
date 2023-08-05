import {
  Box,
  Button,
  Container,
  OutlinedInput,
  Typography,
} from "@mui/material";
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

const birthdayImage = require("../../utils/birthdayImage.png");
const emailImage = require("../../utils/emailImage.png");

const passwordRegExp = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(){};:'",.<>?+=`~|/_])[A-Za-z\d!@#$%^&*(){};:'",.<>?+=`~|/_]{8,}$/
);
const emailRegExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const SignUpPage = ({}: ISignUpPageProps) => {
  const monthsTranslate = useMonthTranslate();
  const { translate } = useTranslationContext();
  const translations = translate("singUp");
  const translationsFooter = translate("footer");
  const translationsLoginForm = translate("loginForm");

  const classes = useStyles();

  const [login, setLogin] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(true);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  useEffect(() => {
    setValidLogin(emailRegExp.test(login));
  }, [login]);
  useEffect(() => {
    setValidPassword(passwordRegExp.test(password));
  }, [password]);

  const [modalStatus, setModalStatus] = useState(false);
  const closeModal = () => setModalStatus(false);
  const openModal = () => setModalStatus(true);
  const [month, setMonth] = useState(
    moment.months()[moment().month()].toLowerCase()
  );
  const [day, setDay] = useState(1);
  const [dayList, setDayList] = useState<any>({ 1: 1 });
  const [year, setYear] = useState(moment().year() - 6);
  const years = () => {
    const currentYear = moment().year() - 6;
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

  const currentScreen = () => {
    switch (next) {
      case 0:
        return singUp();
      case 1:
        return birthDay();
      case 2:
        return commitAddressEmail();
    }
  };
  const reportText = () => (
    <Typography className={classes.typography}>
      {translationsLoginForm.reportTextStart}{" "}
      <Link to="/search" className={`${classes.link} ${classes.reportLink}`}>
        {translationsLoginForm.reportLinkText}
      </Link>{" "}
      {translationsLoginForm.reportTextEnd}
    </Typography>
  );
  const buttonNext = (valid: boolean) => {
    return valid ? (
      <Button
        size="medium"
        variant="contained"
        className={classes.nextButton}
        onClick={() => nextStep()}
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
        }}
      >
        {translations.back}
      </Button>
    );
  };

  const commitAddressEmail = () => (
    <span>
      <Box className={classes.boxBirthdayImage}>
        <img src={emailImage} alt={translations.emailImage} />
      </Box>
      <Typography
        className={classes.birthdayTypography}
        fontWeight={"bold"}
        marginBottom={2}
      >
        {translations.enterConfirmationCode}
      </Typography>
      <Typography className={classes.birthdayTypography} marginBottom={2}>
        {translations.theConfirmationCode}
        {login}
        {". "}
        <span
          onClick={() => {}}
          className={`${classes.birthdayTypography} ${classes.modalOpenLink} ${classes.noSelect} ${classes.resendLink}`}
        >
          {translations.resend}
        </span>
      </Typography>

      <span className={classes.selects}>
        <OutlinedInput
          value={code}
          onChange={(e) => {
            e.target.value.length < 7 && setCode(e.target.value);
          }}
          className={classes.outlinedInput}
          placeholder={translations.confirmationCode}
          size={"small"}
        />
      </span>

      {buttonNext(code.length === 6)}
      {buttonBack()}
      {reportText()}
    </span>
  );
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
      {buttonNext(true)}
      {buttonBack()}
    </span>
  );

  const singUp = () => (
    <>
      <Header />
      <Typography className={classes.singUpTo} textAlign={"center"}>
        {translations.singUpTo}
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
        />
        <InputTextField
          placeholder={translations.fullName}
          size="medium"
          className={classes.textField}
          value={fullName}
          onChange={setFullName}
          validation
          valid
        />
        <InputTextField
          placeholder={translations.username}
          size="medium"
          className={classes.textField}
          value={username}
          onChange={setUsername}
          validation
          valid={validUsername}
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
        />
        <Typography className={classes.typography}>
          {translations.peopleWhoUse}
          <br />
          <Link to="/search" className={`${classes.link} `}>
            {translations.learnMore}
          </Link>
        </Typography>
        <Typography className={classes.typography}>
          {translations.agreeTerms}{" "}
          <Link to="/search" className={`${classes.link} `}>
            {translationsFooter.terms}.
          </Link>{" "}
          {translations.cookiesInformation}
        </Typography>
        {buttonNext(validLogin && validPassword && validUsername)}
        {reportText()}
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
      </Container>
      <Footer />
    </>
  );
};

export default SignUpPage;
