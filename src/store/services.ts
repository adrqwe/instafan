import TransactionService from "../services/$transactions-service";
import ProductsService from "../services/$products-service";
import HomePageDataService from "../services/$homePageData-service";
import SignUpService from "../services/$signUp-service";
import LogInService from "../services/$logIn-service";
import PasswordResetService from "../services/$passwordReset-service";
import PostsService from "../services/$posts-service";

const services = {
  transactionService: TransactionService,
  productsService: ProductsService,
  homePageDataService: HomePageDataService,
  signUpService: SignUpService,
  logInService: LogInService,
  passwordResetService: PasswordResetService,
  postsService: PostsService,
};

export type IServices = typeof services;

export default services;
