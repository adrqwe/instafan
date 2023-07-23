import { useEffect } from "react";
import { Box, Grid, ImageList } from "@mui/material";

import MainMenu from "../reusable/MainMenu";
import Header from "../reusable/Header";
import { IHomePageProps } from "./HomePage.types";
import { useStyles } from "./HomePage.style";
import ImageListItem from "../reusable/ImageListItem";
import Footer from "../reusable/Footer";

const HomePage = ({ homePageData, mounted }: IHomePageProps) => {
  const classes = useStyles();
  useEffect(() => {
    mounted();
  }, []);

  return (
    <Grid container columns={20}>
      <Grid item xs={4} className={classes.gridMainMenuContainer}>
        <Box className={classes.fixedMainMenu}>
          <Header />
          <MainMenu />
        </Box>
      </Grid>
      <Grid item xs={16} className={classes.gridDataContainer}>
        <ImageList
          variant="masonry"
          cols={3}
          gap={20}
          className={classes.imageList}
        >
          <></>
          {homePageData.data.map(
            ({ image, id, count_of_comments, count_of_likes }) => {
              return (
                <ImageListItem
                  image={image}
                  key={id}
                  countOfComment={count_of_comments}
                  countOfLikes={count_of_likes}
                />
              );
            }
          )}
        </ImageList>
        <Box>
          <Footer />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
