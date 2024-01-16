import {
  Button,
  CircularProgress,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { IFormModalProps } from "./FormModal.types";
import { useStyles } from "./FormModal.style";
import { useTranslationContext } from "../../../../models/translationsContext/translationsContext";

const FormModal = ({
  open,
  img,
  imgAlt,
  loading,
  textArea,
  onClose,
  setTextArea,
  sharePost,
}: IFormModalProps) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("formModal");

  const writeTextArea = (text: string) => {
    if (text.length <= 400) {
      setTextArea(text);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={`${classes.container} ${classes.noSelect}`}
    >
      <>
        {!loading ? (
          <div className={`${classes.divContainer} ${classes.noSelect}`}>
            <Grid container className={classes.gridContainer} columns={20}>
              <Grid item xs={13} className={classes.pictureSection}>
                <span>
                  <img
                    src={img}
                    alt={imgAlt}
                    className={classes.imageShadow}
                    draggable={false}
                  />
                </span>
                <span className={classes.imageSpan}>
                  <img
                    src={img}
                    alt={imgAlt}
                    className={classes.image}
                    draggable={false}
                  />
                </span>
              </Grid>
              <Grid item xs={7} className={classes.descriptionSection}>
                <Typography margin={1}>{translations.description}</Typography>
                <textarea
                  rows={6}
                  aria-invalid="false"
                  placeholder={translations.placeholderOfDescriptionInput}
                  className={classes.descriptionInput}
                  onChange={(e) => {
                    writeTextArea(e.target.value);
                  }}
                  value={textArea}
                ></textarea>
                <div className={classes.counter}>{textArea.length} / 400</div>
                <div className={classes.buttonBox}>
                  <Button variant="contained" onClick={sharePost}>
                    {translations.share}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        ) : (
          <CircularProgress />
        )}
        <button className={classes.closeButton} onClick={onClose}>
          <CloseOutlinedIcon fontSize="large" />
        </button>
      </>
    </Modal>
  );
};

export default FormModal;
