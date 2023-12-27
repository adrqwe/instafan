import { Typography } from "@mui/material";

import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import { IMainLoaderProps } from "./MainLoader.types";
import { useStyles } from "./MainLoader.style";

const logoLightTheme = require(`../../../utils/logoLightTheme.png`);

const MainLoader = ({ getLoaderState }: IMainLoaderProps) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("mainLoader");

  return (
    <div
      className={`${classes.container} ${!getLoaderState && classes.fadeOut}`}
    >
      <img
        src={logoLightTheme}
        alt={translations.logo}
        width={300}
        draggable={false}
      />
      <Typography className={classes.typography}>{translations.by}</Typography>
    </div>
  );
};

export default MainLoader;
