import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    minWidth: "150px",
  },
  hr: {
    borderBottom: "1px solid gray",
    width: "200%",
    height: 1,
    display: "block",
    position: "absolute",
    transform: "translateX(-50%)",
  },
  closeModalButton: { position: "absolute", right: 0 },
  sectionOfModal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 0",
  },
});
