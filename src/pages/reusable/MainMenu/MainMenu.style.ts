import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  box: {
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
  },
  menuIcon: {
    fontSize: "40px",
  },
  profilMenuList: {
    margin: "auto 0 0 0",
  },
  menuList: {
    display: "block",
  },
  linkToProfile: {
    display: "none",
  },
  "@media (max-width: 900px)": {
    box: {
      flexDirection: "row",
      height: "auto",
      alignItems: "center",
      backgroundColor: "white",
      width: "100%",
      margin: 0,
      justifyContent: "center",
    },
    menuList: {
      display: "flex",
    },
    menuIcon: {
      fontSize: "35px",
    },
    profilMenuList: {
      display: "none",
    },
    linkToProfile: {
      display: "flex",
    },
  },
});
