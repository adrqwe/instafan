import { createUseStyles } from "react-jss";

import { theme } from "../../../../theme";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divContainer: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionSection: {
    backgroundColor: theme.palette.common.black,
    color: "white",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    border: `1px solid ${theme.palette.grey[800]}`,
    borderLeft: "none",
  },
  gridContainer: {
    maxWidth: "1250px",
    aspectRatio: "20 / 14",
    maxHeight: "95vh",
  },
  pictureSection: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  },
  imageSpan: {
    zIndex: 1,
    position: "relative",
  },
  imageShadow: {
    position: "absolute",
    height: "100%",
    objectFit: "cover",
    filter: "blur(6px)",
    transform: "scale(1)",
  },
  noSelect: {
    userSelect: "none",
    "-moz-user-select": "none",
    "-webkit-text-select": "none",
    "-webkit-user-select": "none",
  },
  closeButton: {
    backgroundColor: "transparent",
    border: "none",
    margin: 10,
    position: "fixed",
    top: 0,
    right: 0,
    color: theme.palette.common.white,
    cursor: "pointer",
  },
  descriptionInput: {
    backgroundColor: "transparent",
    border: "none",
    color: theme.palette.common.white,
    resize: "none",
    fontSize: 16,
    margin: 3,
    outline: "none",
    "-webkit-appearance": "none",
    borderBottom: "1px solid",
  },
  counter: {
    fontSize: 14,
    textAlign: "end",
    margin: 3,
    color: theme.palette.grey[600],
  },
  buttonBox: {
    margin: 20,
    marginTop: "auto",
    textAlign: "end",
  },
});
