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
    width: 300,
    transform: "translateX(-60px);",
  },
  leftButtons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  submitButton: {
    margin: 6,
    whiteSpace: "nowrap",
  },
  "@media (max-width: 600px)": {
    containerMenu: {
      width: "100%",
    },
    header: {
      transform: "translateX(0px);",
    },
  },
});
