import { createUseStyles } from "react-jss";

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
    marginLeft: 10,
    padding: "10px 30px",
    border: "1px solid rgba(0,0,0,0.2)",
  },
  signUpTo: {
    margin: "0 auto",
    color: "gray",
    fontWeight: "bold",
    width: "90%",
  },
  textField: {
    marginTop: 10,
    width: "90%",
    color: "rgb(150,150,150)",
  },
  boxForm: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  link: {
    textDecoration: "none",
    color: "rgb(0, 55, 107)",
  },
  typography: {
    color: "rgb(150,150,150)",
    marginTop: 20,
    width: "95%",
    fontSize: 12,
    textAlign: "center",
  },
  nextButton: {
    margin: "12px 0 5px 0",
    width: "100%",
    backgroundColor: "rgb(0, 149, 246)",
  },
  backButton: {
    margin: "5px 0 4px 0",
    backgroundColor: "transparent",
  },
  reportLink: {
    color: "rgb(0, 55, 107)",
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
    color: "rgb(0, 149, 246)",
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
    backgroundColor: "rgb(250, 250, 250)",
    width: "90%",
    marginBottom: 15,
  },
});
