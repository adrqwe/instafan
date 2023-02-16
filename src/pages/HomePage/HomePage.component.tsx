import React, { useEffect } from "react";
import { Grid, Container, CssBaseline } from "@mui/material";

import MainMenu from "../reusable/MainMenu";
import Header from "../reusable/Header";
import { IHomePageProps } from "./HomePage.types";

const HomePage = ({ mounted, homePageData }: IHomePageProps) => {
  useEffect(() => {
    mounted();
  }, []);
  useEffect(() => {
    console.log(homePageData);
  }, [homePageData]);
  return (
    <Grid container columns={20}>
      <Grid item xs={4}>
        <Header />
        <MainMenu />
      </Grid>
      <Grid item xs={16} style={{ backgroundColor: "blue" }}></Grid>
    </Grid>
  );
};

export default HomePage;
