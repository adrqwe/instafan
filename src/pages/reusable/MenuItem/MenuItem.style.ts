import { MenuItem } from "@mui/material";
import { createUseStyles } from "react-jss";
import styled from "styled-components";

export const StyledMenuItem = styled(MenuItem)`
  margin: 10px 3px !important;
  border-radius: 10% !important;
  padding: 10px !important;
`;

export const useStyles = createUseStyles({
  menuText: {
    paddingLeft: "5px",
  },
});
