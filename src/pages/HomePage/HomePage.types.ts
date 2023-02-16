import { IHomePageDataSuccessPayload } from "../../models/homePageData/types";

export interface IHomePageFromState {
  homePageData: IHomePageDataSuccessPayload[] | [];
}
export interface IHomePageFromDispatch {
  mounted: () => void;
}
export type IHomePageProps = IHomePageFromState & IHomePageFromDispatch;
