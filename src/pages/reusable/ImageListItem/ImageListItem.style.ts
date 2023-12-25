import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  imageNoHover: {
    display: "none",
  },
  imageHover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(100% - 20px)",
    backgroundColor: "rgba(0,0,0,0.25)",
    cursor: "pointer",
  },
  informationCountDisplay: {
    padding: 5,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  },
  centerInformationIcon: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  marginForIcon: {
    padding: 5,
  },
  centerInformationIconDisplay: {
    display: "flex",
  },
  "@media (max-width: 900px)": {
    centerInformationIconDisplay: {
      display: "none",
    },
  },
});
