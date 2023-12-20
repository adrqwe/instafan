import { useStyles } from "./ProfileImage.style";
import { IProfileImage } from "./ProfileImage.types";
import { useTranslationContext } from "../../../models/translationsContext/translationsContext";

const ProfileImage = ({ image, name }: IProfileImage) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("profileImage");

  return (
    <img
      src={image}
      alt={`${translations.profilePicture} ${name}`}
      className={classes.img}
    />
  );
};

export default ProfileImage;
