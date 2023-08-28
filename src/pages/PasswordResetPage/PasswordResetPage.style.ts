import { createUseStyles } from "react-jss";

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
    border: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  textField: {
    marginTop: 10,
    width: "90%",
    color: "rgb(150,150,150)",
  },

  typography: {
    color: "rgb(150,150,150)",
    marginTop: 20,
    width: "95%",
    fontSize: 12,
    textAlign: "center",
  },
  sendCode: {
    margin: "20px 0 5px 0",
    width: "100%",
    backgroundColor: "rgb(0, 149, 246)",
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
    fontSize: 16,
    textDecoration: "none",
    color: "rgb(100,100,100)",
    margin: "10px 0 10px 0",
    "&:hover": {
      color: "rgb(140,140,140)",
    },
  },
  backToLoginLink: {
    width: "100%",
    textAlign: "center",
    margin: 0,
    padding: "10px 0",
  },
  backToLoginBox: {
    border: "1px solid rgba(0,0,0,0.2)",
    width: "360px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb(250,250,250)",
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
