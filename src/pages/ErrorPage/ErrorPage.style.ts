import { createUseStyles } from "react-jss";

import { theme } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.secondary.main,
    zIndex: 100,
  },
  centerElement: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },
});
