import { createUseStyles } from "react-jss";

import { theme } from "../../../theme";

export const useStyles = createUseStyles({
  container: {
    backgroundColor: theme.palette.common.white,
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    zIndex: 10,
  },
  typography: {
    color: theme.palette.common.black,
    position: "absolute",
    bottom: 0,
    margin: 20,
  },
  "@keyframes fadeOutAnimation": {
    from: {
      transform: "translateY(0)",
      opacity: 1,
      display: "flex",
    },
    to: {
      transform: "translateY(-80%)",
      opacity: 0,
      display: "none",
    },
  },
  fadeOut: {
    animationName: "$fadeOutAnimation",
    animationDuration: "0.4s",
    animationFillMode: "forwards",
  },
});
