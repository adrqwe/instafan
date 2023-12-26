import { createUseStyles } from "react-jss";

import { theme } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    marginTop: "15vh",
    display: "flex",
    alignItems: "center",
    marginBottom: 60,
    flexDirection: "column",
  },
  forms: {
    width: "300px",
    padding: "10px 30px",
    border: `1px solid ${theme.palette.grey.A100}`,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  textField: {
    marginTop: 10,
    width: "90%",
    color: theme.palette.grey[400],
  },

  typography: {
    color: theme.palette.grey[400],
    marginTop: 20,
    width: "95%",
    fontSize: 12,
    textAlign: "center",
  },
  sendCode: {
    margin: "20px 0 5px 0",
    width: "100%",
    backgroundColor: theme.palette.info.main,
  },

  backButton: {
    margin: "5px 0 4px 0",
    backgroundColor: "transparent",
  },

  boxLockImage: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
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
    fontSize: 16,
    textDecoration: "none",
    color: theme.palette.grey[700],
    margin: "10px 0 10px 0",
    "&:hover": {
      color: theme.palette.grey[500],
    },
  },
  backToLoginLink: {
    width: "100%",
    textAlign: "center",
    margin: 0,
    padding: "10px 0",
  },
  backToLoginBox: {
    border: `1px solid ${theme.palette.grey.A100}`,
    width: "360px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[50],
    cursor: "pointer",
  },
  passwordInput: {
    width: "85%",
  },
  passwordChangedImage: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
  },
});
