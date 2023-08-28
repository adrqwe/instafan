import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "../../SignUpPage.style";
import { useTranslationContext } from "../../../../models/translationsContext/translationsContext";

const ReportText = () => {
  const { translate } = useTranslationContext();
  const translationsLoginForm = translate("loginForm");

  const classes = useStyles();

  return (
    <Typography className={classes.typography}>
      {translationsLoginForm.reportTextStart}{" "}
      <Link to="/search" className={`${classes.link} ${classes.reportLink}`}>
        {translationsLoginForm.reportLinkText}
      </Link>{" "}
      {translationsLoginForm.reportTextEnd}
    </Typography>
  );
};

export default ReportText;
