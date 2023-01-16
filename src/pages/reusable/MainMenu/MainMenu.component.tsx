import React from "react";
import { Box } from "@mui/material";

import { useStyles } from "./MainMenu.style";
import { StyledLink } from "../Link/Link.style";

const MainMenu = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <StyledLink to="/" style={{ color: "black" }}>
        Strona Główna
      </StyledLink>
    </Box>
  );
};

export default MainMenu;
