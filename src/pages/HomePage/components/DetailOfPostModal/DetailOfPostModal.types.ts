import { ISingleHomePageDataSuccessPayload } from "../../../../models/homePageData/types";

export interface IDetailOfPostModalProps {
  open: boolean;
  data: ISingleHomePageDataSuccessPayload;
  comment: string;
  closeModal: () => void;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  postSubmit: () => void;
  quickComment: () => void;
}
