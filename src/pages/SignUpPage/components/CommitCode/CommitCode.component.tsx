import { Box, OutlinedInput, Typography } from "@mui/material";

import { useStyles } from "../../SignUpPage.style";
import { ICommitCode } from "./CommitCode.types";
import ErrorMessageTypography from "../ErrorMessageTypography";
import { useTranslationContext } from "../../../../models/translationsContext/translationsContext";
import ReportText from "../ReportText/ReportText.component";
import { theme } from "../../../../theme";

const emailImage = require("../../../../utils/emailImage.png");

const CommitCode = ({
  email,
  code,
  errorMessages,
  commitMessage,
  onSubmit,
  children,
  onResend,
  setCode,
  backButton,
}: ICommitCode) => {
  const { translate } = useTranslationContext();
  const translations = translate("signUp");

  const classes = useStyles();

  return (
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
        {email}
        {". "}
        <span
          onClick={onResend}
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
      <span className={classes.selects}>{children}</span>

      {onSubmit}
      {backButton && backButton()}
      <ErrorMessageTypography errorMessage={errorMessages} />
      {commitMessage && (
        <Typography color={theme.palette.success.main} textAlign="center">
          {commitMessage}
        </Typography>
      )}
      <ReportText />
    </span>
  );
};

export default CommitCode;
