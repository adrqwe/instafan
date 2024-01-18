import { useCallback, useEffect, useState } from "react";
import { ImageList, Snackbar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";

import { IHomePageProps } from "./HomePage.types";
import { useStyles } from "./HomePage.style";
import ImageListItem from "../reusable/ImageListItem";
import DetailOfPostModal from "./components/DetailOfPostModal";
import { ISingleHomePageDataSuccessPayload } from "../../models/homePageData/types";
import routes from "../../navigator/routes";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";

let imageInteraction = 0;

const HomePage = ({
  homePageData,
  singleHomePageData,
  getCheckExistTokenDetails,
  getCurrentToken,
  getAddCommentResponse,
  mounted,
  mountedSingleHomePageData,
  mountedAddComment,
  mountedLikeThePost,
}: IHomePageProps) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("homePage");

  const [selectedPost, setSelectedPost] = useState(0);
  const [singlePostLoading, setSinglePostLoading] = useState(true);

  const handleCloseModal = (likeStatus: boolean) => {
    sendLikeThePost(selectedPost, likeStatus);
    setSelectedPost(0);
  };

  const [imagesIsLoaded, setImagesIsLoaded] = useState(false);

  const [comment, setComment] = useState("");

  useEffect(() => {
    mounted();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      setComment("");
      mountedSingleHomePageData({
        id: selectedPost,
        token: `${getCurrentToken}`,
      });
    }
    setSinglePostLoading(true);
  }, [selectedPost]);

  useEffect(() => {
    if (singleHomePageData.status === 200) {
      setSinglePostLoading(false);
    }
  }, [singleHomePageData]);

  const addImageInteraction = useCallback(() => {
    imageInteraction++;
    if (imageInteraction >= homePageData.data.length) {
      setImagesIsLoaded(true);
    }
  }, [homePageData]);

  const [commentCanBeSendTimestamp, setCommentCanBeSendTimestamp] = useState(0);

  const checkCommentCanBeSendTimestamp = () =>
    commentCanBeSendTimestamp < moment().unix();

  const sendComment = (comment: string) => {
    if (checkCommentCanBeSendTimestamp()) {
      if (getCheckExistTokenDetails.valid && getCurrentToken) {
        setComment("");
        mountedAddComment({
          token: getCurrentToken,
          postId: selectedPost,
          comment: comment,
        });
      } else {
        window.location.replace(routes.login);
      }
      setCommentCanBeSendTimestamp(moment().add(5, "second").unix());
    }
  };

  useEffect(() => {
    if (getAddCommentResponse.added) {
      mountedSingleHomePageData({
        id: selectedPost,
        token: `${getCurrentToken}`,
      });
    }
  }, [getAddCommentResponse]);

  const sendLikeThePost = (postId: number, like: boolean) => {
    if (getCheckExistTokenDetails.valid && getCurrentToken) {
      mountedLikeThePost({
        token: getCurrentToken,
        postId: postId,
        like: like,
      });
    }
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleCloseSnackbar = () => setSnackbarOpen(false);

  const copyPostLink = () => {
    setSnackbarOpen(true);
    navigator.clipboard.writeText(
      window.location.protocol +
        "//" +
        window.location.host +
        routes.defaultPostLink +
        selectedPost
    );
  };

  return (
    <div className={classes.gridDataContainer}>
      {!imagesIsLoaded && (
        <div className={classes.circularProgress}>
          <CircularProgress />
        </div>
      )}
      <ImageList
        variant="masonry"
        cols={3}
        gap={20}
        className={`${classes.imageList} ${
          !imagesIsLoaded && classes.imageListNone
        }`}
      >
        {homePageData.data.map(
          ({ image, id, count_of_comments, count_of_likes, description }) => {
            return (
              <ImageListItem
                onClick={() => setSelectedPost(id)}
                image={image}
                key={id}
                countOfComment={count_of_comments}
                countOfLikes={count_of_likes}
                description={description}
                postId={id}
                onLoad={() => {
                  addImageInteraction();
                }}
              />
            );
          }
        )}
      </ImageList>
      <DetailOfPostModal
        loading={singlePostLoading}
        open={Boolean(selectedPost)}
        closeModal={handleCloseModal}
        data={singleHomePageData.data as ISingleHomePageDataSuccessPayload}
        setComment={setComment}
        comment={comment}
        postSubmit={() => sendComment(comment)}
        quickComment={() => {
          sendComment("😊");
        }}
        commentCanBeSend={checkCommentCanBeSendTimestamp()}
        share={copyPostLink}
      ></DetailOfPostModal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarOpen}
        message={translations.copied}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      />
    </div>
  );
};

export default HomePage;
