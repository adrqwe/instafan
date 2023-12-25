import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  box: {
    margin: "50px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  span: {
    width: "70%",
  },
  img: {
    width: "100%",
  },
  imgWithoutText: {
    width: "3rem",
    display: "none",
  },
  "@media (max-width: 1200px)": {
    img: {
      display: "none",
    },
    imgWithoutText: {
      display: "inline-block",
    },
    box: {
      margin: "10px 0",
    },
  },
  "@media (max-width: 900px)": {
    imgWithoutText: {
      display: "none",
    },
  },
});
