import { useEffect, useState } from "react";
import { ImageList } from "@mui/material";

import { IHomePageProps } from "./HomePage.types";
import { useStyles } from "./HomePage.style";
import ImageListItem from "../reusable/ImageListItem";
import DetailOfPostModal from "./components/DetailOfPostModal";
import { ISingleHomePageDataSuccessPayload } from "../../models/homePageData/types";

const HomePage = ({
  homePageData,
  singleHomePageData,
  mounted,
  mountedSingleHomePageData,
}: IHomePageProps) => {
  const classes = useStyles();

  const [selectedPost, setSelectedPost] = useState(0);
  const handleCloseModal = () => setSelectedPost(0);

  useEffect(() => {
    mounted();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      mountedSingleHomePageData({ id: selectedPost });
    }
  }, [selectedPost]);

  return (
    <div className={classes.gridDataContainer}>
      <ImageList
        variant="masonry"
        cols={3}
        gap={20}
        className={classes.imageList}
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
