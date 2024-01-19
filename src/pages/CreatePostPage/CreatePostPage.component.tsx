import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { ICreatePostPageProps } from "./CreatePostPage.types";
import { useStyles } from "./CreatePostPage.style";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";
import FormModal from "./components/FormModal";
import Modal from "../reusable/Modal";

const addImageIcon = require("../../utils/addImageIcon.png");
const successCheck = require("../../utils/successCheck.png");
const errorPng = require("../../utils/error.png");

const acceptedFiles = ["image/png", "image/jpeg", "image/gif"];

var imageReader = new FileReader();

const CreatePostPage = ({
  getCheckExistTokenDetails,
  getCurrentToken,
  getCreatePostResponse,
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
      setTextArea("");
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
      setTextArea("");
    }
  };

  useEffect(() => {
    if (
      formData.get("image") &&
      acceptedFiles.find(
        (e: string) => e === (formData.get("image") as File).type
      ) &&
      (formData.get("image") as File).size <= 3000000
    ) {
      imageReader.onloadend = () => {
        setLoadingModal(false);
        if (imageReader.result) {
          setImagePreviewSrc(imageReader.result as string);
        }
      };

      imageReader.readAsDataURL(formData.get("image") as any);
    } else {
      setImagePreviewSrc("");
      handleCloseModal();
      if (formData.get("image")) {
        if ((formData.get("image") as File).size > 3000000) {
          setErrorMsg(translations.thisFileIsTooBig);
        } else {
          setErrorMsg(translations.thisFileIsInvalid);
        }

        setPostAddErrorModal(true);
        setOpenModal(false);
      }
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

  useEffect(() => {
    if (getCreatePostResponse.status === 200) {
      setPostAddSuccessModal(true);
      setOpenModal(false);
    }
    if (getCreatePostResponse.status === 500) {
      setErrorMsg(getCreatePostResponse.detail);
      setPostAddErrorModal(true);
    }

    getCreatePostResponse.status = 100;
  }, [getCreatePostResponse]);

  const [postAddSuccessModal, setPostAddSuccessModal] = useState(false);
  const [postAddErrorModal, setPostAddErrorModal] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

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
      <Modal
        width={380}
        open={postAddSuccessModal}
        handleClose={() => {
          setPostAddSuccessModal(false);
        }}
        title={translations.success}
      >
        <Box className={classes.boxModalImage}>
          <img
            src={successCheck}
            alt={translations.successImage}
            draggable={false}
          />
        </Box>
        <Typography variant="h6" textAlign={"center"} marginBottom={1}>
          {translations.postSuccess}
        </Typography>
      </Modal>
      <Modal
        width={380}
        open={postAddErrorModal}
        handleClose={() => {
          setPostAddErrorModal(false);
        }}
        title={translations.error}
      >
        <Box className={classes.boxModalImage}>
          <img src={errorPng} alt={translations.errorImage} draggable={false} />
        </Box>
        <Typography variant="h6" textAlign={"center"} marginBottom={1}>
          {errorMsg}
        </Typography>
      </Modal>
    </div>
  );
};

export default CreatePostPage;
