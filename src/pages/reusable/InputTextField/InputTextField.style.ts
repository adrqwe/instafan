import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  boxInput: {
    display: "flex",
    position: "relative",
    backgroundColor: "rgb(250, 250, 250)",
    border: "1px solid rgb(219, 219, 219)",
    color: "rgb(100, 100, 100)",
    borderRadius: 2,
    fontFamily: "Roboto",
  },
  boxWithOnlyPlaceHolder: { alignItems: "center" },
  boxWithPlaceHolderAndInput: {
    flexDirection: "column",
    justifyContent: "center",
  },
  boxInputSmall: { padding: 7, fontSize: "0.95rem", height: 20 },
  boxInputMedium: { padding: 7, fontSize: "1.2rem", height: 22 },
  boxInputLarge: { padding: 7, fontSize: "1.4rem", height: 24 },

  placeholderSmall: { height: 26, padding: "4px 7px" },
  placeholderMedium: { height: 28, padding: "4px 7px" },
  placeholderLarge: { height: 30, padding: "4px 7px" },

  noSelect: {
    userSelect: "none",
    "-moz-user-select": "none",
    "-webkit-text-select": "none",
    "-webkit-user-select": "none",
  },

  placeholder: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "calc(100% - 20px)",
    textOverflow: "ellipsis",
    display: "flex",
    alignItems: "center",
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
  scal: {
    height: "50%",
    fontSize: "0.7em",
    display: "flex",
    alignItems: "center",
  },

  "@keyframes placeholderAnimation": {
    from: {
      height: "90%",
      fontSize: "0.70em",
      transform: "translateY(100%)",
    },
    to: {
      height: "50%",
      fontSize: "0.6em",
      transform: "translateY(0)",
    },
  },
  placeholderAnimation: {
    animationName: "$placeholderAnimation",
    animationDuration: "0.3s",
    animationFillMode: "forwards",
  },
  "@keyframes placeholderAnimationRevers": {
    from: {
      height: "50%",
      fontSize: "0.6em",
      transform: "translateY(-50%)",
    },
    to: { height: "100%", fontSize: "0.75em", transform: "translateY(0)" },
  },
  placeholderAnimationRevers: {
    animationName: "$placeholderAnimationRevers",
    animationDuration: "0.3s",
    animationFillMode: "forwards",
  },
  showButton: {
    placeSelf: "end",
    position: "absolute",
    fontSize: "0.75em",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
    padding: 2,
    "&:hover": {
      color: "rgb(150, 150, 150)",
    },
  },
  checkInput: {
    display: "flex",
    position: "absolute",
    right: 0,
    padding: 1,
  },
  checkInputHidden: {
    display: "none",
  },
});
