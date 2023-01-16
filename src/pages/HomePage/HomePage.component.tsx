import React, { useEffect } from "react";
import { Grid, Container, CssBaseline } from "@mui/material";

import { IHomePageProps } from "./HomePage.types";
import MainMenu from "../reusable/MainMenu";
import Header from "../reusable/Header";

const HomePage = () => {
  return (
    <Grid container columns={20}>
      <Grid item xs={4}>
        <Header />
        <MainMenu />
      </Grid>
      <Grid item xs={16} style={{ backgroundColor: "blue" }}>
        <span>xs=8</span>
      </Grid>
    </Grid>
  );
};

export default HomePage;
