import { createUseStyles } from "react-jss";

import { theme } from "../../../../../theme";

export const useStyles = createUseStyles({
  selectBox: {
    margin: "3px 7px",
    fontFamily: "Roboto",
    fontSize: "0.80rem",
    color: theme.palette.grey[700],
    zIndex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  languageSelect: {
    textDecoration: "none",
    position: "absolute",
    left: 0,
    width: "100%",
    opacity: 0,
    cursor: "pointer",
  },
  arrowIcon: {
    fontSize: "1.4em",
  },
});
