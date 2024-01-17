import { createUseStyles } from "react-jss";

import { theme } from "../../theme";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  titleOfForm: {
    margin: 20,
  },
  addImageIcon: {
    width: 100,
    margin: 20,
  },
  selectButton: {
    marginTop: 15,
  },
  dragEvent: {
    backgroundColor: theme.palette.grey.A200,
  },
  boxModalImage: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
  },
});
