import { createUseStyles } from "react-jss";

import { theme } from "../../../theme";

export const useStyles = createUseStyles({
  imageNoHover: {
    display: "none",
  },
  imageHover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.25)",
    cursor: "pointer",
    overflow: "hidden",
  },
  informationCountDisplay: {
    padding: 5,
    color: theme.palette.common.white,
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
