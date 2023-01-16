import { IProductsSuccessPayload } from "../../models/products/types";

export interface IHomePageFromState {
  products: IProductsSuccessPayload[];
}
export interface IHomePageFromDispatch {
  mounted: () => void;
  requestForSingleProduct: (slug: string) => void;
}
export type IHomePageProps = IHomePageFromState & IHomePageFromDispatch;
