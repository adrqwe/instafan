import { createUseStyles } from "react-jss";

import { theme } from "../../../theme";

export const useStyles = createUseStyles({
  logo: {
    width: "70%",
    margin: "40px 0 60px 0",
  },
  form: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    position: "relative",
  },
  textField: {
    marginTop: 10,
    width: "65%",
    color: theme.palette.grey[300],
  },
  checkbox: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    marginTop: 15,
    justifyContent: "flex-start",
    color: theme.palette.grey[500],
  },
  checkboxIcon: {
    color: theme.palette.secondary.light,
  },
  submitButton: {
    marginTop: 12,
    width: "70%",
    backgroundColor: theme.palette.info.main,
  },
  separator: {
    position: "relative",
    color: theme.palette.grey[500],
    marginTop: 20,
    width: "70%",
  },
  orText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.secondary.main,
    padding: "5px 28px",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.grey[700],
  },
  boxWithLink: {
    marginTop: 20,
  },
  report: {
    width: "70%",
    position: "absolute",
    bottom: 0,
    margin: "20px 0",
    textAlign: "center",
    color: theme.palette.grey[700],
  },
  reportLink: {
    color: theme.palette.info.dark,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  submitButtonDisable: {
    backgroundColor: `${theme.palette.info.light} !important`,
    color: `${theme.palette.common.white} !important`,
  },
  errorMessages: {
    marginTop: 10,
  },
});
