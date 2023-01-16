import {
  Modal as ModalElement,
  Box,
  IconButton as IconButtonElement,
} from "@mui/material";
import { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import IconButton from "../IconButton/IconButton.component";
import { IModalProps } from "./Modal.types";
import { StyledContainer } from "./Modal.style";

const Modal = ({ icon, children, badge, shopCart }: IModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton whenPressed={handleOpen} icon={icon} badge={badge} />

      <ModalElement
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledContainer>
          <Box>
            <IconButtonElement onClick={handleClose}>
              <ArrowBackRoundedIcon />
            </IconButtonElement>
          </Box>
          {children}
        </StyledContainer>
      </ModalElement>
    </>
  );
};

export default Modal;
