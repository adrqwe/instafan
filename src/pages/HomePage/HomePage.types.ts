import {
  THomePageData,
  TSingleHomePageData,
  TSingleHomePageDataId,
} from "../../models/homePageData/types";

export interface IHomePageFromState {
  homePageData: THomePageData;
  singleHomePageData: TSingleHomePageData;
}
export interface IHomePageFromDispatch {
  mounted: () => void;
  mountedSingleHomePageData: (data: TSingleHomePageDataId) => void;
}
export type IHomePageProps = IHomePageFromState & IHomePageFromDispatch;
