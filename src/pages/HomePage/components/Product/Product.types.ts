import { IProductsSuccessPayload } from "../../../../models/products/types";

export interface IProductProps {
  product: IProductsSuccessPayload;
  requestForSingleProduct: (slug: string) => void;
}
