import { Box, Grid } from "@mui/material";
import { useEffect } from "react";

import { useStyles } from "./GUIInterface.style";
import { IGUIInterfaceProps } from "./GUIInterface.types";
import Header from "../../pages/reusable/Header";
import MainMenu from "../../pages/reusable/MainMenu";
import Footer from "../../pages/reusable/Footer";
import { TCheckExistToken } from "../../models/logIn/types";
import TopMenu from "../../pages/reusable/TopMenu";

const GUIInterface = ({
  children,
  getCheckExistTokenDetails,
  getLogInDetails,
  mountedCheckExistToken,
  setLoaderState,
}: IGUIInterfaceProps) => {
  const classes = useStyles();

  useEffect(() => {
    let currentToken: TCheckExistToken = { token: null };
    if (getLogInDetails.status === 200) {
      currentToken.token = getLogInDetails.token;
    } else {
      currentToken.token = localStorage.getItem("access_token");
      if (!currentToken.token) {
        currentToken.token = sessionStorage.getItem("access_token");
      }
    }

    mountedCheckExistToken({ token: currentToken.token });
  }, []);

  useEffect(() => {
    if (getCheckExistTokenDetails.status === 100) {
      setLoaderState(true);
    } else {
      setTimeout(() => {
        setLoaderState(false);
      }, 500);
    }
  }, [getCheckExistTokenDetails]);

  return getCheckExistTokenDetails.valid ? (
    <Grid container columns={20}>
      <Grid item xs={1} md={1} lg={4} className={classes.gridMainMenuContainer}>
        <Box className={classes.fixedMainMenu}>
          <Header changeToIcon className={classes.header} />
          <MainMenu />
        </Box>
      </Grid>
      <Grid item xs={20} md={19} lg={16} className={classes.gridDataContainer}>
        {children}
        <Box className={classes.footerBox}>
          <Footer />
        </Box>
      </Grid>
    </Grid>
  ) : (
    <Grid container columns={20}>
      <Grid item xs={20} className={classes.gridDataContainer}>
        <Box className={classes.floatingMenu}>
          <TopMenu />
        </Box>
        <span style={{ display: "block", height: 50 }}></span>
        {children}
        <Box className={classes.footerBox}>
          <Footer />
        </Box>
      </Grid>
    </Grid>
  );
};

export default GUIInterface;
