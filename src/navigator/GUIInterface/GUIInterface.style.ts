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
    height: "100%",
  },
  floatingMenu: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    borderBottom: "1px solid #E6E6E6",
    top: 0,
    backgroundColor: "white",
  },
  header: { display: "flex" },
  "@media (max-width: 1200px)": {
    gridMainMenuContainer: { border: "none" },
    fixedMainMenu: {
      borderRight: "1px solid #E6E6E6",
      width: "65px",
      left: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  "@media (max-width: 900px)": {
    fixedMainMenu: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "red",
      zIndex: 2,
      top: "auto",
      bottom: 0,
      height: "auto",
      border: "none",
      width: "100%",
      borderTop: "1px solid #E6E6E6",
    },
    header: { display: "none" },
  },
});
