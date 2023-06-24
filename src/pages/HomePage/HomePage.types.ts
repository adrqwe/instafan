import { THomePageData } from "../../models/homePageData/types";

export interface IHomePageFromState {
  homePageData: THomePageData;
}
export interface IHomePageFromDispatch {
  mounted: () => void;
}
export type IHomePageProps = IHomePageFromState & IHomePageFromDispatch;
