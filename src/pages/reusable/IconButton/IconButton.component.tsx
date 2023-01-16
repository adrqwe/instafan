import { IconButton as IconButtonElement, Badge } from "@mui/material";

import { StyledIconButton } from "./IconButton.style";
import { IIconButtonProps } from "./IconButton.types";

const IconButton = ({ icon, whenPressed, badge }: IIconButtonProps) => {
  if (badge) {
    return (
      <Badge badgeContent={4} color="secondary">
        <IconButtonElement onClick={whenPressed}>{icon}</IconButtonElement>
      </Badge>
    );
  }
  return <StyledIconButton onClick={whenPressed}>{icon}</StyledIconButton>;
};

export default IconButton;
