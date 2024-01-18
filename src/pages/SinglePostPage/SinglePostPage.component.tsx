import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  CircularProgress,
} from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";

import { ISinglePostPageProps } from "./SinglePostPage.types";
import { useStyles } from "../HomePage/components/DetailOfPostModal/DetailOfPostModal.style";
import { useStyles as useStylesSingle } from "./SinglePostPage.style";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";
import { theme } from "../../theme";
import ProfileImage from "../reusable/ProfileImage";
import { ISingleHomePageDataSuccessPayload } from "../../models/homePageData/types";
import routes from "../../navigator/routes";

const defaultProfileImage = require("../../utils/default_profile_image.jpg");
const heartIcon = require("../../utils/heartIcon.png");

const SinglePostPage = ({
  getCurrentToken,
  singleHomePageData,
  getCheckExistTokenDetails,
  getAddCommentResponse,
  mountedSingleHomePageData,
  mountedAddComment,
  mountedLikeThePost,
}: ISinglePostPageProps) => {
  const classes = useStyles();
  const classesSingelPostPage = useStylesSingle();
  const params = useParams();

  const { translate } = useTranslationContext();
  const translationsDetailOfPostModal = translate("detailOfPostModal");

  const [postId, setPostId] = useState<string | undefined>(params.id);

  useEffect(() => {
    singleHomePageData.status = 100;
    setPostId(params.id);
  }, [params]);

  const [data, setData] = useState<ISingleHomePageDataSuccessPayload | null>(
    null
  );

  useEffect(() => {
    if (postId) {
      mountedSingleHomePageData({
        id: Number(postId),
        token: `${getCurrentToken}`,
      });
    }
  }, []);

  useEffect(() => {
    if (getAddCommentResponse.added) {
      mountedSingleHomePageData({
        id: Number(postId),
        token: `${getCurrentToken}`,
      });
    }
  }, [getAddCommentResponse]);

  useEffect(() => {
    if (singleHomePageData.status === 200 && singleHomePageData.data) {
      let data = singleHomePageData.data as ISingleHomePageDataSuccessPayload;
      data.comments.reverse();

      if (data.description) {
        data.comments.unshift({
          commentedBy: data.authorName,
          commentId: -1,
          comment: data.description,
          userId: data.authorId,
        });
      }
      setData(data);
    } else {
      setData(null);
    }
  }, [singleHomePageData]);

  const [like, setLike] = useState(false);
  const handleSetLike = () => setLike(!like);

  const [heartAnimation, setHeartAnimation] = useState(false);

  const [comment, setComment] = useState("");

  const [shakeALittle, setShakeALittle] = useState(false);

  const shakeALittleAction = () => {
    if (!checkCommentCanBeSendTimestamp() && !shakeALittle) {
      setShakeALittle(true);
    } else {
      setShakeALittle(false);
    }
  };

  useEffect(() => {
    setShakeALittle(false);
    setHeartAnimation(false);
    if (singleHomePageData.data) {
      setLike(
        Boolean(
          (singleHomePageData.data as ISingleHomePageDataSuccessPayload).liked
        )
      );
    } else {
      setData(null);
    }
  }, [singleHomePageData]);

  const [commentCanBeSendTimestamp, setCommentCanBeSendTimestamp] = useState(0);

  const checkCommentCanBeSendTimestamp = () =>
    commentCanBeSendTimestamp < moment().unix();

  const sendComment = (comment: string) => {
    if (checkCommentCanBeSendTimestamp()) {
      if (getCheckExistTokenDetails.valid && getCurrentToken) {
        setComment("");
        mountedAddComment({
          token: getCurrentToken,
          postId: Number(postId),
          comment: comment,
        });
      } else {
        window.location.replace(routes.login);
      }
      setCommentCanBeSendTimestamp(moment().add(5, "second").unix());
    }
  };

  const sendLikeThePost = (postId: number, like: boolean) => {
    if (getCheckExistTokenDetails.valid && getCurrentToken) {
      mountedLikeThePost({
        token: getCurrentToken,
        postId: postId,
        like: like,
      });
    }
  };

  useEffect(() => {
    sendLikeThePost(Number(postId), like);
  }, [like]);

  return (
    <div className={classesSingelPostPage.container}>
      {singleHomePageData.status === 200 && data ? (
        <>
          <div className={classesSingelPostPage.pictureSection}>
            <img
              src={data.image}
              alt={data.description}
              className={classesSingelPostPage.image}
              draggable={false}
              onDoubleClick={() => {
                setLike(true);
                setHeartAnimation(!heartAnimation);
              }}
            />
            {heartAnimation && (
              <span
                className={classesSingelPostPage.floatingHeartOnDoubleClick}
              >
                <img
                  src={heartIcon}
                  className={classes.heartImage}
                  alt={translationsDetailOfPostModal.heartImage}
                />
              </span>
            )}
          </div>

          <div className={classesSingelPostPage.commentSection}>
            <Box className={classes.authorBox}>
              <div className={classes.profilePictureBox}>
                <ProfileImage
                  image={defaultProfileImage}
                  name={data.authorName}
                />
              </div>
              <Typography className={classesSingelPostPage.username}>
                {data.authorName}
              </Typography>
              <button className={classesSingelPostPage.moreOptionsButton}>
                <MoreHorizOutlinedIcon />
              </button>
            </Box>
            <Box className={classesSingelPostPage.addCommentBox}>
              <IconButton
                className={classes.actionIcon}
                onClick={() => handleSetLike()}
              >
                {!like ? (
                  <FavoriteBorderOutlinedIcon
                    style={{ color: theme.palette.secondary.light }}
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
                  style={{ color: theme.palette.secondary.light }}
                />
              </IconButton>
              <IconButton className={classes.actionIcon}>
                <SendOutlinedIcon
                  style={{ color: theme.palette.secondary.light }}
                />
              </IconButton>
              <Box className={classes.commentInputBox}>
                <IconButton
                  onClick={() => {
                    sendComment("😊");
                    shakeALittleAction();
                  }}
                  className={`${shakeALittle && classes.shakeALittle}`}
                >
                  <SentimentSatisfiedOutlinedIcon
                    style={{ color: theme.palette.secondary.light }}
                  />
                </IconButton>
                <input
                  className={`${classesSingelPostPage.input} ${
                    shakeALittle && classes.shakeALittle
                  }`}
                  placeholder={translationsDetailOfPostModal.addComment}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendComment(comment);
                      shakeALittleAction();
                    }
                  }}
                />
                <Button
                  variant="text"
                  disabled={!Boolean(comment)}
                  onClick={() => {
                    sendComment(comment);
                    shakeALittleAction();
                  }}
                  className={`${!comment && classes.disableButton}`}
                >
                  {translationsDetailOfPostModal.post}
                </Button>
              </Box>
            </Box>
            <Box>
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
                        className={`${classesSingelPostPage.username} ${classes.commentFontSize}`}
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
                          className={classesSingelPostPage.likeCommentIcon}
                        />
                      </IconButton>
                    </Box>
                  );
                })}
            </Box>
          </div>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default SinglePostPage;
