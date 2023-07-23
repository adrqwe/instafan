import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  box: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
  link: {
    fontFamily: "Roboto",
    fontSize: "0.80rem",
    margin: "3px 7px",
    textDecoration: "none",
    color: "rgb(100,100,100)",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  languageSelect: {
    textDecoration: "none",
    position: "absolute",
    left: 0,
    width: "100%",
    opacity: 0,
    cursor: "pointer",
  },
  selectBox: {
    margin: "3px 7px",
    fontFamily: "Roboto",
    fontSize: "0.80rem",
    color: "rgb(100,100,100)",
    zIndex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  arrowIcon: {
    fontSize: "1.4em",
  },
  by: {
    fontFamily: "Roboto",
    fontSize: "0.80rem",
    color: "rgb(100,100,100)",
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
    textAlign: "center",
  },
});
