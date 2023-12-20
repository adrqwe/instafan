import { ISingleHomePageDataSuccessPayload } from "../../../../models/homePageData/types";

export interface IDetailOfPostModalProps {
  open: boolean;
  data: ISingleHomePageDataSuccessPayload;
  closeModal: () => void;
}
