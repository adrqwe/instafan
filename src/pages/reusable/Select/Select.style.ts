import { createUseStyles } from "react-jss";

import { theme } from "../../../theme";

export const useStyles = createUseStyles({
  menuItem: { fontSize: 12, padding: "1px 3px" },
  select: {
    fontSize: 12,
    color: theme.palette.secondary.light,
  },
});
