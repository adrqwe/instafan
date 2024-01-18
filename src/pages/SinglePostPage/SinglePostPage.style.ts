import { createUseStyles } from "react-jss";

import { theme } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pictureSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "90%" },
  commentSection: {
    width: "85%",
    maxWidth: "600px",
  },
  "@keyframes floatingHeart": {
    "0%": {
      transform: "rotate(0.2turn)",
      opacity: 0,
    },
    "30%": {
      transform: "rotate(0.0turn)",
      opacity: 1,
    },
    "100%": {
      transform: "translateY(-300%)",
      opacity: 0,
    },
  },
  floatingHeartOnDoubleClick: {
    position: "absolute",
    zIndex: 2,

    animationName: "$floatingHeart",
    animationDuration: "1.6s",
    animationFillMode: "forwards",
  },
  username: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  moreOptionsButton: {
    margin: "5px 5px 5px auto",
    padding: 5,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.grey[600],
    },
  },
  addCommentBox: {
    borderTop: `1px solid ${theme.palette.grey[900]}`,
  },
  input: {
    border: "none",
    outline: "none",
    "-webkit-appearance": "none",
    padding: 0,
    backgroundColor: "transparent",
    zIndex: 1,
    width: "100%",
    fontSize: "1em",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  likeCommentIcon: {
    fontSize: "20px",
  },
});
