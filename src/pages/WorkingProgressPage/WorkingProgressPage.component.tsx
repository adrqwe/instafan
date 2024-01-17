import { Typography } from "@mui/material";

import { IWorkingProgressPage } from "./WorkingProgressPage.types";
import { useStyles } from "./WorkingProgressPage.style";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";

const wrenchIcon = require("../../utils/wrenchIcon.png");

const WorkingProgressPage = ({}: IWorkingProgressPage) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("workingProgressPage");

  return (
    <div className={classes.container}>
      <img src={wrenchIcon} width={200} alt={translations.wrenchIcon} />
      <Typography variant="h4" marginTop={3} textAlign={"center"}>
        {translations.notYetReady}
      </Typography>
    </div>
  );
};

export default WorkingProgressPage;
