import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  menuItem: {
    margin: "10px 3px",
    borderRadius: "10px",
    padding: "10px",
  },
  menuText: {
    paddingLeft: "5px",
  },
  "@media (max-width: 1200px)": {
    menuText: {
      display: "none",
    },
  },
  "@media (max-width: 900px)": {
    menuItem: {
      margin: "5px 1px",
      padding: "8px",
    },
  },
});
