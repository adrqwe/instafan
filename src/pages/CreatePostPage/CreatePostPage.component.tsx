import { Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { ICreatePostPageProps } from "./CreatePostPage.types";
import { useStyles } from "./CreatePostPage.style";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";
import FormModal from "./components/FormModal";

const addImageIcon = require("../../utils/addImageIcon.png");

var imageReader = new FileReader();

const CreatePostPage = ({
  getCheckExistTokenDetails,
  getCurrentToken,
  mountedCreatePost,
}: ICreatePostPageProps) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("createPostPage");

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
    setLoadingModal(true);
  };

  const [formData, setFormData] = useState(new FormData());
  const [imagePreviewSrc, setImagePreviewSrc] = useState("");

  const [loadingModal, setLoadingModal] = useState(true);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const catchImage = () => {
    if (imageInputRef.current && imageInputRef.current.files) {
      var form = new FormData();
      form.append("image", imageInputRef.current.files[0]);
      setFormData(form);

      setOpenModal(true);

      imageInputRef.current.removeEventListener("change", catchImage);
    }
  };

  const clickImageInputRef = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
      imageInputRef.current.addEventListener("change", catchImage);
    }
  };

  const catchDroppedImage = (e: React.DragEvent<HTMLDivElement>) => {
    setDragEventOver();
    setLoadingModal(true);
    e.preventDefault();

    if (e.dataTransfer.files) {
      var form = new FormData();
      form.append("image", e.dataTransfer.files[0]);
      setFormData(form);

      setOpenModal(true);
    }
  };

  useEffect(() => {
    if (formData.get("image")) {
      imageReader.onloadend = () => {
        setLoadingModal(false);
        if (imageReader.result) {
          setImagePreviewSrc(imageReader.result as string);
        }
      };

      // console.log((formData.get("image") as File).type);

      imageReader.readAsDataURL(formData.get("image") as any);
    } else {
      setImagePreviewSrc("");
      handleCloseModal();
    }
  }, [formData]);

  const [dragEvent, setDragEvent] = useState(false);
  const setDragEventOver = () => setDragEvent(false);
  const setDragEventStart = () => setDragEvent(true);

  const [textArea, setTextArea] = useState("");

  const sharePostAction = () => {
    if (getCheckExistTokenDetails.valid && getCurrentToken) {
      var form = formData;
      form.append("token", getCurrentToken);
      form.append("description", textArea);
      setFormData(form);

      sendPost();
    }
  };

  const sendPost = () => {
    mountedCreatePost({
      form: formData,
    });
  };

  return (
    <div
      className={`${classes.container} ${dragEvent && classes.dragEvent}`}
      onDrop={catchDroppedImage}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDragEnter={setDragEventStart}
      onDragLeave={setDragEventOver}
    >
      <Typography variant="h5" className={classes.titleOfForm}>
        {translations.createNewPost}
      </Typography>
      <img
        src={addImageIcon}
        draggable={false}
        alt={translations.addImageIcon}
        className={classes.addImageIcon}
      />
      <Typography>{translations.drop}</Typography>
      <Button
        variant="contained"
        className={classes.selectButton}
        onClick={clickImageInputRef}
      >
        {translations.select}
      </Button>
      <form encType="multipart/form-data" method="POST" role="presentation">
        <input
          type="file"
          accept="image/png, image/jpeg, image/gif"
          ref={imageInputRef}
          hidden
        />
      </form>
      <FormModal
        loading={loadingModal}
        open={openModal}
        onClose={handleCloseModal}
        imgAlt={translations.altText}
        img={imagePreviewSrc}
        textArea={textArea}
        setTextArea={setTextArea}
        sharePost={sharePostAction}
      />
    </div>
  );
};

export default CreatePostPage;
