import { ISingleHomePageDataSuccessPayload } from "../../../../models/homePageData/types";

export interface IDetailOfPostModalProps {
  loading: boolean;
  open: boolean;
  data: ISingleHomePageDataSuccessPayload;
  comment: string;
  commentCanBeSend: boolean;
  closeModal: () => void;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  postSubmit: () => void;
  quickComment: () => void;
}
