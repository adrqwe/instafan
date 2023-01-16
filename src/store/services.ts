import TransactionService from "../services/$transactions-service";
import ProductsService from "../services/$products-service";
const services = {
  transactionService: TransactionService,
  productsService: ProductsService,
};
export type IServices = typeof services;

export default services;
