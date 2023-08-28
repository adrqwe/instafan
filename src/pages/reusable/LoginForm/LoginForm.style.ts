import { createUseStyles } from "react-jss";

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
    color: "rgb(200,200,200)",
  },
  checkbox: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    marginTop: 15,
    justifyContent: "flex-start",
    color: "rgb(140,140,140)",
  },
  submitButton: {
    marginTop: 12,
    width: "70%",
    backgroundColor: "rgb(0, 149, 246)",
  },
  separator: {
    position: "relative",
    color: "rgb(140,140,140)",
    marginTop: 20,
    width: "70%",
  },
  orText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "5px 28px",
  },
  link: {
    textDecoration: "none",
    color: "rgb(100,100,100)",
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
    color: "rgb(100,100,100)",
  },
  reportLink: {
    color: "rgb(0, 55, 107)",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  submitButtonDisable: {
    backgroundColor: "rgb(0, 200, 250) !important",
    color: "white !important",
  },
  errorMessages: {
    marginTop: 10,
  },
});
