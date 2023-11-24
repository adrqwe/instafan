import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  containerMenu: {
    width: "76%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    width: 400,
    transform: "translateX(-60px);",
  },
  leftButtons: {
    float: "right",
  },
  submitButton: {
    margin: 6,
  },
});
