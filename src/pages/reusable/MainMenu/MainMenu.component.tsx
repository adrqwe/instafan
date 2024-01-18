import { Box, MenuList, MenuItem as MenuItemMUI, Menu } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ReactElement, useState } from "react";
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
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

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

  const [profileEl, setProfileEl] = useState<null | HTMLElement>(null);
  const open = Boolean(profileEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileEl(event.currentTarget);
  };
  const handleCloseProfileListMenu = () => {
    setProfileEl(null);
  };

  const logoutAction = () => {
    localStorage.setItem("access_token", "");
    sessionStorage.setItem("access_token", "");
    window.location.replace(routes.login);
  };

  return (
    <Box className={classes.box}>
      <MenuList className={classes.menuList}>
        <MenuItem
          route={routes.homePage}
          text={translations.homePage}
          icon={selectedMenuItem(
            <HomeOutlinedIcon className={classes.menuIcon} />,
            <HomeIcon className={classes.menuIcon} />,
            routes.homePage
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
        <MenuItem
          className={classes.linkToProfile}
          route={routes.account}
          text={translations.create}
          icon={<AccountCircleOutlinedIcon className={classes.menuIcon} />}
        />
      </MenuList>
      <div className={classes.profilMenuList}>
        <span onClick={handleClick}>
          <MenuItem
            text={translations.profile}
            icon={<AccountCircleOutlinedIcon className={classes.menuIcon} />}
          />
        </span>
        <Menu
          id="profileListMenu"
          anchorEl={profileEl}
          open={open}
          onClose={handleCloseProfileListMenu}
          MenuListProps={{
            "aria-labelledby": "profileListMenu",
          }}
        >
          <MenuItemMUI
            onClick={() => {
              logoutAction();
              handleCloseProfileListMenu();
            }}
          >
            {translations.logout}
          </MenuItemMUI>
        </Menu>
      </div>
    </Box>
  );
};

export default MainMenu;
