import { Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useStyles } from "./MenuItem.style";
import { StyledMenuItem } from "./MenuItem.style";
import { IMenuItem } from "./MenuItem.types";

const MenuItem = ({ text, icon, route }: IMenuItem) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onLocationChange = useCallback(
    (linkTo: string) => navigate(linkTo),
    [navigate]
  );

  return (
    <StyledMenuItem
      onClick={() => {
        onLocationChange(route);
      }}
    >
      {icon}
      <Typography className={classes.menuText}>{text}</Typography>
    </StyledMenuItem>
  );
};

export default MenuItem;
