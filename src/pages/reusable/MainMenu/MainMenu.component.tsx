import { Box, MenuList } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ReactElement } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { useStyles } from "./MainMenu.style";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import routes from "../../../navigator/routes";
import MenuItem from "../MenuItem";

const MainMenu = () => {
  const classes = useStyles();
  const location = useLocation();

  const { translate } = useTranslationContext();
  const translations = translate("menu");

  const selectedMenuItem = (
    filledIcon: ReactElement,
    outlinedIcon: ReactElement,
    route: string
  ): ReactElement => {
    return location.pathname === route ? outlinedIcon : filledIcon;
  };

  return (
    <Box className={classes.box}>
      <MenuList>
        <MenuItem
          route={routes.login}
          text={translations.homePage}
          icon={selectedMenuItem(
            <HomeOutlinedIcon className={classes.menuIcon} />,
            <HomeIcon className={classes.menuIcon} />,
            routes.login
          )}
        />
        <MenuItem
          route={routes.search}
          text={translations.search}
          icon={selectedMenuItem(
            <SearchOutlinedIcon className={classes.menuIcon} />,
            <SearchIcon className={classes.menuIcon} />,
            routes.search
          )}
        />
        <MenuItem
          route={routes.explore}
          text={translations.explore}
          icon={selectedMenuItem(
            <ExploreOutlinedIcon className={classes.menuIcon} />,
            <ExploreIcon className={classes.menuIcon} />,
            routes.explore
          )}
        />
        <MenuItem
          route={routes.messages}
          text={translations.messages}
          icon={selectedMenuItem(
            <SendOutlinedIcon className={classes.menuIcon} />,
            <SendIcon className={classes.menuIcon} />,
            routes.messages
          )}
        />
        <MenuItem
          route={routes.notifications}
          text={translations.notifications}
          icon={selectedMenuItem(
            <FavoriteBorderOutlinedIcon className={classes.menuIcon} />,
            <FavoriteIcon className={classes.menuIcon} />,
            routes.notifications
          )}
        />
        <MenuItem
          route={routes.create}
          text={translations.create}
          icon={selectedMenuItem(
            <AddBoxOutlinedIcon className={classes.menuIcon} />,
            <AddBoxIcon className={classes.menuIcon} />,
            routes.create
          )}
        />
      </MenuList>
    </Box>
  );
};

export default MainMenu;
