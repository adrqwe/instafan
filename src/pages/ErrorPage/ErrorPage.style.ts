import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
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
