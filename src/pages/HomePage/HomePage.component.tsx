import { useCallback, useEffect, useState } from "react";
import { ImageList } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { IHomePageProps } from "./HomePage.types";
import { useStyles } from "./HomePage.style";
import ImageListItem from "../reusable/ImageListItem";
import DetailOfPostModal from "./components/DetailOfPostModal";
import { ISingleHomePageDataSuccessPayload } from "../../models/homePageData/types";

let imageInteraction = 0;

const HomePage = ({
  homePageData,
  singleHomePageData,
  mounted,
  mountedSingleHomePageData,
}: IHomePageProps) => {
  const classes = useStyles();

  const [selectedPost, setSelectedPost] = useState(0);
  const handleCloseModal = () => setSelectedPost(0);

  const [imagesIsLoaded, setImagesIsLoaded] = useState(false);

  useEffect(() => {
    mounted();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      mountedSingleHomePageData({ id: selectedPost });
    }
  }, [selectedPost]);

  const addImageInteraction = useCallback(() => {
    imageInteraction++;
    if (imageInteraction === homePageData.data.length) {
      setImagesIsLoaded(true);
    }
  }, [homePageData]);

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
      ></DetailOfPostModal>
    </div>
  );
};

export default HomePage;
