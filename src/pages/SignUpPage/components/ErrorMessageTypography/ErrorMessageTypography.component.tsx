import { Typography } from "@mui/material";

import { useStyles } from "./ErrorMessageTypography.style";
import { IErrorMessageTypography } from "./ErrorMessageTypography.types";

const ErrorMessageTypography = ({ errorMessage }: IErrorMessageTypography) => {
  const classes = useStyles();

  return (
    <>
      {errorMessage.map((e: string, index: number) => (
        <Typography key={index} className={classes.errorMessage}>
          {e}
        </Typography>
      ))}
    </>
  );
};

export default ErrorMessageTypography;
