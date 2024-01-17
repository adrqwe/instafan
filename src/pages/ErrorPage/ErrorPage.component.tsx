import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { IErrorPageProps } from "./ErrorPage.types";
import { useStyles } from "./ErrorPage.style";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";

const errorImage = require("../../utils/error.png");

const ErrorPage = ({
  getAuthTokenFailure,
  getConfirmCodeResponseFailure,
  getSignUpResponseFailure,
  getResendResponseFailure,
  getLogInFailure,
  getConfirmAddressEmailFailure,
  getResendCodePasswordResetFailure,
  getChangePasswordResponseFailure,
  getCheckExistTokenFailure,
  getCreatePostFailure,
}: IErrorPageProps) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("errorPage");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (
      getAuthTokenFailure ||
      getConfirmCodeResponseFailure ||
      getSignUpResponseFailure ||
      getResendResponseFailure ||
      getLogInFailure ||
      getConfirmAddressEmailFailure ||
      getResendCodePasswordResetFailure ||
      getChangePasswordResponseFailure ||
      getCheckExistTokenFailure ||
      getCreatePostFailure
    ) {
      setError(true);
      document.body.style.overflow = "hidden";
    }
  }, [
    getAuthTokenFailure,
    getConfirmCodeResponseFailure,
    getSignUpResponseFailure,
    getResendResponseFailure,
    getLogInFailure,
    getConfirmAddressEmailFailure,
    getResendCodePasswordResetFailure,
    getChangePasswordResponseFailure,
    getCheckExistTokenFailure,
    getCreatePostFailure,
  ]);

  return error ? (
    <div className={classes.container}>
      <div className={classes.centerElement}>
        <div className={classes.imageContainer}>
          <img src={errorImage} alt={translations.altMessage} />
        </div>
        <Typography variant="h5">{translations.criticalError}</Typography>
      </div>
    </div>
  ) : (
    <div style={{ display: "none" }}></div>
  );
};

export default ErrorPage;
