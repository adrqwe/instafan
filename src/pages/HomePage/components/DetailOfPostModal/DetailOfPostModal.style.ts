import { createUseStyles } from "react-jss";

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
    color: "white",
    cursor: "pointer",
  },
  commentSection: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
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
    borderBottom: "1px solid rgb(38, 38, 38)",
  },
  profilePictureBox: {
    height: 35,
    margin: 8,
  },
  username: {
    marginLeft: 5,
    color: "white",
    fontWeight: "bold",
  },
  moreOptionsButton: {
    color: "white",
    margin: "5px 5px 5px auto",
    padding: 5,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      color: "gray",
    },
  },
  addCommentBox: {
    borderTop: "1px solid rgb(38, 38, 38)",
    color: "white",
  },
  actionIcon: {
    margin: "10px 10px",
  },
  commentInputBox: {
    padding: "10px 0",
    width: "100%",
    borderTop: "1px solid rgb(38, 38, 38)",
    display: "flex",
  },
  input: {
    color: "white",
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
    color: "gray !important",
  },
  commentsBox: { height: "100%", overflow: "hidden" },
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
    color: "white",
    fontSize: "20px",
  },
});
