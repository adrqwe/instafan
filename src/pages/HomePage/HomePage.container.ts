import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import HomePage from "./HomePage.component";
import _Store from "@Store";
import { IHomePageFromState, IHomePageFromDispatch } from "./HomePage.types";
import {
  mounted,
  requestForSingleProduct,
} from "../../models/products/actions";
import { getProducts } from "../../models/products/selectors/getProducts";

const mapStateToProps = (state: _Store.IState): IHomePageFromState => ({
  products: getProducts(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IHomePageFromDispatch => ({
  mounted: () => dispatch(mounted()),
  requestForSingleProduct: (slug) => dispatch(requestForSingleProduct(slug)),
});
export default connect<
  IHomePageFromState,
  IHomePageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
