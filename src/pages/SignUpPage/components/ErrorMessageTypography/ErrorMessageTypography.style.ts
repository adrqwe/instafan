import { createUseStyles } from "react-jss";

import { theme } from "../../../../theme";

export const useStyles = createUseStyles({
  errorMessage: {
    color: theme.palette.error.main,
    fontSize: 14,
    textAlign: "center",
  },
});
