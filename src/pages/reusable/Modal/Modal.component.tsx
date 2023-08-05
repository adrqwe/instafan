import { Box, IconButton, Modal as ModalMUI, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useStyles } from "./Modal.style";
import { IModal } from "./Modal.types";

const Modal = ({
  children,
  width,
  title,
  open,
  footer,
  handleClose,
}: IModal) => {
  const classes = useStyles();

  return (
    <ModalMUI open={open}>
      <Box
        className={classes.container}
        style={{ width: `${width && width}px` }}
      >
        <Box className={classes.sectionOfModal}>
          <Typography fontSize="medium" fontWeight={"bold"}>
            {title}
          </Typography>
          <IconButton
            size="medium"
            className={classes.closeModalButton}
            onClick={handleClose}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
        </Box>
        <span className={classes.hr}></span>
        {children}
        {footer && (
          <>
            <span className={classes.hr}></span>
            <Box className={classes.sectionOfModal}>{footer}</Box>
          </>
        )}
      </Box>
    </ModalMUI>
  );
};

export default Modal;
