import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import Modal from "./Modal.component";
import _Store from "@Store";
import {
  IModalFromState,
  IModalFromDispatch,
  IModalOwnProps,
} from "./Modal.types";
import { getSingleProduct } from "../../../models/products/selectors/getSingleProduct";

const mapStateToProps = (state: _Store.IState): IModalFromState => ({
  singleProduct: getSingleProduct(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IModalFromDispatch => ({});

export default connect<
  IModalFromState,
  IModalFromDispatch,
  IModalOwnProps,
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
