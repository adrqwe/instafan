import { createUseStyles } from "react-jss";

import { theme } from "../../theme";

export const useStyles = createUseStyles({
  gridMainMenuContainer: {
    borderRight: `1px solid ${theme.palette.grey[100]}`,
    position: "relative",
  },
  gridDataContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  imageList: {
    width: "70%",
  },
  imageListNone: {
    display: "none",
  },
  fixedMainMenu: {
    position: "fixed",
    width: "19vw",
  },
  circularProgress: {
    marginTop: "30px",
  },
  "@media (max-width: 1200px)": {
    imageList: {
      width: "90%",
    },
  },
});
