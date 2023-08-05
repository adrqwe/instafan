import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { ILoginPageProps } from "./LoginPage.types";
import { useStyles } from "./LoginPage.style";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";
import LoginForm from "../reusable/LoginForm";
import routes from "../../navigator/routes";
import config from "../../config";
import Footer from "../reusable/Footer";

const homePhones = require("../../utils/home-phones.png");
const screenshot1 = require(`../../utils/screenshotsAppTeaser/screenshot1.png`);
const screenshot2 = require(`../../utils/screenshotsAppTeaser/screenshot2.png`);
const screenshot3 = require(`../../utils/screenshotsAppTeaser/screenshot3.png`);
const screenshot4 = require(`../../utils/screenshotsAppTeaser/screenshot4.png`);
const googleApp = require(`../../utils/googlePlayApp${config.activeLanguage}.png`);

const LoginPage = ({}: ILoginPageProps) => {
  const { translate } = useTranslationContext();
  const translations = translate("loginPage");

  const classes = useStyles();

  const [indexOfScreen, setIndexOfScreen] = useState(0);

  const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4];

  const sliderLoop = () => {
    if (indexOfScreen < screenshots.length - 1) {
      return setIndexOfScreen(indexOfScreen + 1);
    } else {
      return setIndexOfScreen(0);
    }
  };

  const screenshotImage = (index: number) => {
    return (
      <img
        src={screenshots[index]}
        alt={translations.appPreview}
        className={`${classes.sliderImages} ${classes.noSelect} ${
          indexOfScreen === index ? classes.index : classes.opacity
        }`}
      />
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      sliderLoop();
    }, 5000);
    return () => clearTimeout(timer);
  }, [indexOfScreen]);

  return (
    <>
      <Container className={classes.container}>
        <Grid container columns={2} className={classes.gridContainer}>
          <Grid item xs={1} className={classes.gridImageContainer}>
            <div className={classes.divAppTeaser}>
              <img
                src={homePhones}
                alt={translations.appPreview}
                className={classes.noSelect}
              />
              {screenshotImage(0)}
              {screenshotImage(1)}
              {screenshotImage(2)}
              {screenshotImage(3)}
            </div>
          </Grid>
          <Grid item xs={1}>
            <Box className={`${classes.loginFormBox} ${classes.forms}`}>
              <LoginForm />
            </Box>
            <Box className={`${classes.signUpBox} ${classes.forms}`}>
              <Typography className={classes.signUpText} fontSize="small">
                {translations.accountQuestion}
                <Link to={routes.signUp} className={classes.signUpLink}>
                  {translations.signUp}
                </Link>
              </Typography>
            </Box>
            <Box className={classes.boxGoogleAppImage}>
              <Typography fontSize="small" margin={1.5}>
                {translations.downloadApp}
              </Typography>
              <span className={classes.spanGoogleAppImage}>
                <Link to="/">
                  <img
                    src={googleApp}
                    className={classes.googleAppImage}
                    alt={translations.downloadApp}
                  />
                </Link>
              </span>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;
