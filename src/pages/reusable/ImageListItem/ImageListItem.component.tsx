import { Box, ImageListItem as ImageListItemMUI } from "@mui/material";
import { useState } from "react";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useStyles } from "./ImageListItem.style";
import { IImageListItem } from "./ImageListItem.types";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";
import DecimalPoint from "../DecimalPoint/DecimalPoint";

const ImageListItem = ({
  image,
  countOfComment,
  countOfLikes,
  onClick,
}: IImageListItem) => {
  const [hoverVisible, setHoverVisible] = useState(false);

  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("imageListItem");

  const roundCountOf = (count: number) => {
    let divisionCount = count / 1000;
    if (10 <= divisionCount && divisionCount < 1000)
      return (
        DecimalPoint(Math.floor(divisionCount * 10) / 10).toString() +
        ` ${translations.thousand}`
      );
    else if (1000 <= divisionCount)
      return (
        DecimalPoint(Math.floor((divisionCount / 1000) * 10) / 10).toString() +
        ` ${translations.million}`
      );
    else return count;
  };

  return (
    <Box
      onClick={onClick}
      style={{ position: "relative" }}
      onMouseOver={() => setHoverVisible(true)}
      onMouseOut={() => {
        setHoverVisible(false);
      }}
    >
      <ImageListItemMUI>
        <img src={image} alt="" />
      </ImageListItemMUI>
      <Box
        className={`${classes.imageHover} ${
          !hoverVisible && classes.imageNoHover
        }`}
      >
        <span className={classes.centerInformationIcon}>
          <span className={classes.informationCountDisplay}>
            <FavoriteIcon className={classes.marginForIcon} />
            {roundCountOf(countOfLikes)}
          </span>
          <span className={classes.informationCountDisplay}>
            <QuestionAnswerIcon className={classes.marginForIcon} />
            {roundCountOf(countOfComment)}
          </span>
        </span>
      </Box>
    </Box>
  );
};

export default ImageListItem;
