import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

import { useStyles } from "./DetailOfPostModal.style";
import { IDetailOfPostModalProps } from "./DetailOfPostModal.types";
import ProfileImage from "../../../reusable/ProfileImage";
import { useTranslationContext } from "../../../../models/translationsContext/translationsContext";

const defaultProfileImage = require("../../../../utils/default_profile_image.jpg");

const DetailOfPostModal = ({
  open,
  data,
  closeModal,
}: IDetailOfPostModalProps) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("detailOfPostModal");

  const [comment, setComment] = useState("");

  return (
    <Modal
      open={open}
      onClose={closeModal}
      className={`${classes.container} ${classes.noSelect}`}
    >
      <div className={`${classes.divContainer} ${classes.noSelect}`}>
        <Grid container className={classes.gridContainer} columns={20}>
          <Grid item xs={13} className={classes.pictureSection}>
            <span>
              <img
                src={data.image}
                alt={data.description}
                className={classes.imageShadow}
                draggable={false}
              />
            </span>

            <img
              src={data.image}
              alt={data.description}
              className={classes.image}
              draggable={false}
            />
          </Grid>
          <Grid item xs={7} className={classes.commentSection}>
            <Box className={classes.authorBox}>
              <div className={classes.profilePictureBox}>
                <ProfileImage
                  image={defaultProfileImage}
                  name={data.authorName}
                />
              </div>
              <Typography className={classes.username}>
                {data.authorName}
              </Typography>
              <button className={classes.moreOptionsButton}>
                <MoreHorizOutlinedIcon />
              </button>
            </Box>
            <Box className={classes.commentsBox}>
              {data.comments.map(({ comment, commentedBy, commentId }) => {
                return (
                  <Box className={classes.commentBox} key={commentId}>
                    <div className={classes.profilePictureBox}>
                      <ProfileImage
                        image={defaultProfileImage}
                        name={commentedBy}
                      />
                    </div>
                    <Typography
                      className={`${classes.username} ${classes.commentFontSize}`}
                    >
                      {commentedBy} •{" "}
                      <span
                        className={`${classes.comment} ${classes.commentFontSize}`}
                      >
                        {comment}
                      </span>
                    </Typography>
                    <IconButton className={classes.likeComment}>
                      <FavoriteBorderOutlinedIcon
                        className={classes.likeCommentIcon}
                      />
                    </IconButton>
                  </Box>
                );
              })}
            </Box>
            <Box className={classes.addCommentBox}>
              <IconButton className={classes.actionIcon}>
                <FavoriteBorderOutlinedIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <ChatBubbleOutlineOutlinedIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton className={classes.actionIcon}>
                <SendOutlinedIcon style={{ color: "white" }} />
              </IconButton>
              <Box className={classes.commentInputBox}>
                <IconButton>
                  <SentimentSatisfiedOutlinedIcon style={{ color: "white" }} />
                </IconButton>
                <input
                  className={classes.input}
                  placeholder={translations.addComment}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button
                  variant="text"
                  disabled={!Boolean(comment)}
                  className={`${!comment && classes.disableButton}`}
                >
                  {translations.post}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <button className={classes.closeButton} onClick={closeModal}>
          <CloseOutlinedIcon fontSize="large" />
        </button>
      </div>
    </Modal>
  );
};

export default DetailOfPostModal;
