import { useCallback, useEffect, useState } from "react";
import { ImageList } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";

import { IHomePageProps } from "./HomePage.types";
import { useStyles } from "./HomePage.style";
import ImageListItem from "../reusable/ImageListItem";
import DetailOfPostModal from "./components/DetailOfPostModal";
import { ISingleHomePageDataSuccessPayload } from "../../models/homePageData/types";
import routes from "../../navigator/routes";

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
}: IHomePageProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [selectedPost, setSelectedPost] = useState(0);
  const handleCloseModal = () => setSelectedPost(0);

  const [imagesIsLoaded, setImagesIsLoaded] = useState(false);

  const [comment, setComment] = useState("");

  useEffect(() => {
    mounted();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      setComment("");
      mountedSingleHomePageData({ id: selectedPost });
    }
  }, [selectedPost]);

  const addImageInteraction = useCallback(() => {
    imageInteraction++;
    if (imageInteraction === homePageData.data.length) {
      setImagesIsLoaded(true);
    }
  }, [homePageData]);

  const postSubmit = () => {
    if (getCheckExistTokenDetails.valid && getCurrentToken) {
      setComment("");
      mountedAddComment({
        token: getCurrentToken,
        postId: selectedPost,
        comment: comment,
      });
    } else {
      navigate(routes.login);
      window.location.reload();
    }
  };

  const quickComment = () => {
    if (getCheckExistTokenDetails.valid && getCurrentToken) {
      setComment("");
      mountedAddComment({
        token: getCurrentToken,
        postId: selectedPost,
        comment: "😊",
      });
    } else {
      navigate(routes.login);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (getAddCommentResponse.added) {
      mountedSingleHomePageData({ id: selectedPost });
    }
  }, [getAddCommentResponse]);

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
        open={Boolean(selectedPost)}
        closeModal={handleCloseModal}
        data={singleHomePageData.data as ISingleHomePageDataSuccessPayload}
        setComment={setComment}
        comment={comment}
        postSubmit={postSubmit}
        quickComment={quickComment}
      ></DetailOfPostModal>
    </div>
  );
};

export default HomePage;
