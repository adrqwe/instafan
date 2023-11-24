import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  gridMainMenuContainer: {
    borderRight: "1px solid #E6E6E6",
    position: "relative",
  },
  gridDataContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
  },
  fixedMainMenu: {
    position: "fixed",
    width: "19vw",
  },
  floatingMenu: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    borderBottom: "1px solid #E6E6E6",
    top: 0,
    backgroundColor: "white",
  },
});
