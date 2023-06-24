import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  gridMainMenuContainer: {
    borderRight: "1px solid #E6E6E6",
    position: "relative",
  },
  gridDataContainer: {
    display: "flex",
    justifyContent: "center",
  },
  imageList: {
    width: "70%",
  },
  fixedMainMenu: {
    position: "fixed",
    width: "19vw",
  },
});
