import { Typography, MenuItem as MenuItemMUI } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useStyles } from "./MenuItem.style";
import { IMenuItem } from "./MenuItem.types";

const MenuItem = ({ text, icon, route, style, className }: IMenuItem) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onLocationChange = useCallback(
    (linkTo: string) => navigate(linkTo),
    [navigate]
  );

  return (
    <MenuItemMUI
      onClick={() => {
        if (route) onLocationChange(route);
      }}
      style={style}
      className={`${classes.menuItem} ${className}`}
    >
      {icon}
      <Typography className={classes.menuText}>{text}</Typography>
    </MenuItemMUI>
  );
};

export default MenuItem;
