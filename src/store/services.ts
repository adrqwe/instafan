import TransactionService from "../services/$transactions-service";
import ProductsService from "../services/$products-service";
import HomePageDataService from "../services/$homePageData-service";

const services = {
  transactionService: TransactionService,
  productsService: ProductsService,
  homePageDataService: HomePageDataService,
};

export type IServices = typeof services;

export default services;
