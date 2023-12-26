import { createUseStyles } from "react-jss";

import { theme } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    marginTop: "2vh",
    display: "flex",
    justifyContent: "center",
    marginBottom: 60,
  },
  containerMarginForSmallBox: {
    marginTop: "15vh",
    marginBottom: 120,
  },
  forms: {
    width: "300px",
    padding: "10px 30px",
    border: `1px solid ${theme.palette.grey.A100}`,
  },
  signUpTo: {
    margin: "0 auto",
    color: theme.palette.grey[600],
    fontWeight: "bold",
    width: "90%",
  },
  textField: {
    marginTop: 10,
    width: "90%",
    color: theme.palette.grey[400],
  },
  boxForm: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.info.dark,
  },
  typography: {
    color: theme.palette.grey[400],
    marginTop: 20,
    width: "95%",
    fontSize: 12,
    textAlign: "center",
  },
  nextButton: {
    margin: "12px 0 5px 0",
    width: "100%",
    backgroundColor: theme.palette.info.main,
  },
  backButton: {
    margin: "5px 0 4px 0",
    backgroundColor: "transparent",
  },
  reportLink: {
    color: theme.palette.info.dark,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  boxBirthdayImage: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
  },
  birthdayTypography: {
    textAlign: "center",
    fontSize: "0.9rem",
  },
  modalOpenLink: {
    color: theme.palette.info.main,
    cursor: "pointer",
  },
  modalFooter: {
    marginTop: 5,
  },
  noSelect: {
    userSelect: "none",
    "-moz-user-select": "none",
    "-webkit-text-select": "none",
    "-webkit-user-select": "none",
  },
  selects: {
    display: "flex",
    justifyContent: "center",
  },
  resendLink: {
    fontWeight: "bold",
  },
  outlinedInput: {
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.secondary.light,
    border: `1px solid ${theme.palette.secondary.light}`,
    width: "90%",
    marginBottom: 15,
  },
});
