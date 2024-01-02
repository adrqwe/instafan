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
  commentSection: {
    backgroundColor: theme.palette.common.black,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  gridContainer: {
    maxWidth: "1250px",
    aspectRatio: "20 / 14",
  },
  pictureSection: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    maxWidth: "100%",
    objectFit: "contain",
    zIndex: 1,
  },
  imageShadow: {
    position: "absolute",
    height: "100%",
    objectFit: "cover",
    filter: "blur(6px)",
    transform: "scale(1)",
  },
  authorBox: {
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.grey[900]}`,
  },
  profilePictureBox: {
    height: 35,
    margin: 8,
  },
  username: {
    marginLeft: 5,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  moreOptionsButton: {
    color: theme.palette.common.white,
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
    color: theme.palette.common.white,
  },
  actionIcon: {
    margin: "10px 10px",
  },
  commentInputBox: {
    padding: "10px 0",
    width: "100%",
    borderTop: `1px solid ${theme.palette.grey[900]}`,
    display: "flex",
  },
  input: {
    color: theme.palette.common.white,
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
  noSelect: {
    userSelect: "none",
    "-moz-user-select": "none",
    "-webkit-text-select": "none",
    "-webkit-user-select": "none",
  },
  disableButton: {
    color: `${theme.palette.grey[600]} !important`,
  },
  commentsBox: { height: "100%", overflow: "hidden", overflowY: "scroll" },
  comment: {
    fontWeight: "normal",
  },
  commentFontSize: { fontSize: "0.95rem", marginTop: 8 },
  commentBox: {
    display: "flex",
    marginBottom: 6,
  },
  likeComment: {
    padding: 8,
    alignSelf: "flex-start",
    marginLeft: "auto",
  },
  likeCommentIcon: {
    color: theme.palette.common.white,
    fontSize: "20px",
  },
});
