import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
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
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useStyles } from "./DetailOfPostModal.style";
import { IDetailOfPostModalProps } from "./DetailOfPostModal.types";
import ProfileImage from "../../../reusable/ProfileImage";
import { useTranslationContext } from "../../../../models/translationsContext/translationsContext";
import { theme } from "../../../../theme";

const defaultProfileImage = require("../../../../utils/default_profile_image.jpg");
const heartIcon = require("../../../../utils/heartIcon.png");

const DetailOfPostModal = ({
  open,
  data,
  comment,
  commentCanBeSend,
  loading,
  closeModal,
  setComment,
  postSubmit,
  quickComment,
}: IDetailOfPostModalProps) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("detailOfPostModal");

  const [shakeALittle, setShakeALittle] = useState(false);
  const commentsDiv = useRef<HTMLDivElement>(null);

  const [like, setLike] = useState(false);
  const handleSetLike = () => setLike(!like);

  const [heartAnimation, setHeartAnimation] = useState(false);

  useEffect(() => {
    setShakeALittle(false);
    setHeartAnimation(false);
    setLike(Boolean(data.liked));

    if (data.description) {
      data.comments.unshift({
        commentedBy: data.authorName,
        commentId: -1,
        comment: data.description,
        userId: data.authorId,
      });
    }
  }, [data]);

  const shakeALittleAction = () => {
    if (!commentCanBeSend && !shakeALittle) {
      setShakeALittle(true);
    } else {
      setShakeALittle(false);
    }
  };

  const scrollToEnd = () => {
    if (commentsDiv.current) {
      commentsDiv.current.scrollTop = commentsDiv.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToEnd();
  }, [loading, data]);

  return (
    <Modal
      open={open}
      onClose={() => closeModal(like)}
      className={`${classes.container} ${classes.noSelect}`}
    >
      <>
        {!loading ? (
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
                <span className={classes.imageSpan}>
                  <img
                    src={data.image}
                    alt={data.description}
                    className={classes.image}
                    draggable={false}
                    onDoubleClick={() => {
                      setLike(true);
                      setHeartAnimation(!heartAnimation);
                    }}
                  />
                  {heartAnimation && (
                    <span className={classes.floatingHeartOnDoubleClick}>
                      <img
                        src={heartIcon}
                        className={classes.heartImage}
                        alt={translations.heartImage}
                      />
                    </span>
                  )}
                </span>
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
                <Box className={classes.commentsBox} ref={commentsDiv}>
                  {data.comments &&
                    data.comments.map(({ comment, commentedBy, commentId }) => {
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
                  <IconButton
                    className={classes.actionIcon}
                    onClick={() => handleSetLike()}
                  >
                    {!like ? (
                      <FavoriteBorderOutlinedIcon
                        style={{ color: theme.palette.common.white }}
                      />
                    ) : (
                      <FavoriteIcon
                        style={{ color: theme.palette.error.light }}
                        className={classes.favorite}
                      />
                    )}
                  </IconButton>
                  <IconButton>
                    <ChatBubbleOutlineOutlinedIcon
                      style={{ color: theme.palette.common.white }}
                    />
                  </IconButton>
                  <IconButton className={classes.actionIcon}>
                    <SendOutlinedIcon
                      style={{ color: theme.palette.common.white }}
                    />
                  </IconButton>
                  <Box className={classes.commentInputBox}>
                    <IconButton
                      onClick={() => {
                        quickComment();
                        shakeALittleAction();
                      }}
                      className={`${shakeALittle && classes.shakeALittle}`}
                    >
                      <SentimentSatisfiedOutlinedIcon
                        style={{ color: theme.palette.common.white }}
                      />
                    </IconButton>
                    <input
                      className={`${classes.input} ${
                        shakeALittle && classes.shakeALittle
                      }`}
                      placeholder={translations.addComment}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          postSubmit();
                          shakeALittleAction();
                        }
                      }}
                    />
                    <Button
                      variant="text"
                      disabled={!Boolean(comment)}
                      onClick={() => {
                        postSubmit();
                        shakeALittleAction();
                      }}
                      className={`${!comment && classes.disableButton}`}
                    >
                      {translations.post}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        ) : (
          <CircularProgress />
        )}
        <button
          className={classes.closeButton}
          onClick={() => closeModal(like)}
        >
          <CloseOutlinedIcon fontSize="large" />
        </button>
      </>
    </Modal>
  );
};

export default DetailOfPostModal;
