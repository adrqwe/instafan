import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    marginTop: "7vh",
  },
  gridContainer: {
    width: "100%",
    marginBottom: 120,
  },
  gridImageContainer: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "flex-end",
  },
  forms: {
    width: "65%",
    marginLeft: 10,
    padding: "10px 5px",
    border: "1px solid rgba(0,0,0,0.2)",
  },
  loginFormBox: {
    height: "87%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  singUpBox: {
    marginTop: 12,
    display: "flex",
    justifyContent: "center",
  },
  singUpText: {
    margin: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
  singUpLink: {
    marginLeft: 5,
    textDecoration: "none",
    color: "rgb(0, 149, 246)",
  },
  boxGoogleAppImage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
  },
  googleAppImage: {
    width: "100%",
  },
  spanGoogleAppImage: {
    width: "30%",
  },
  divAppTeaser: {
    backgroundSize: "468.32px 634.15px",
    position: "relative",
  },
  sliderImages: { position: "absolute", left: 155, top: 25 },
  "@keyframes opacity": {
    from: {
      opacity: 1,
    },
    to: { opacity: 0 },
  },

  index: {
    zIndex: 1,
  },
  opacity: {
    zIndex: 2,
    animationName: "$opacity",
    animationDuration: "1.5s",
    animationFillMode: "forwards",
  },
  noSelect: {
    userSelect: "none",
    "-moz-user-select": "none",
    "-webkit-text-select": "none",
    "-webkit-user-select": "none",
    "-drag": "none",
    "-webkit-user-drag": "none",
  },
});
