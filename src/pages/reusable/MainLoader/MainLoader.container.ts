import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import MainLoader from "./MainLoader.component";
import {
  IMainLoaderFromState,
  IMainLoaderFromDispatch,
} from "./MainLoader.types";
import { getLoaderState } from "../../../models/loader/selectors/getLoaderState";

const mapStateToProps = (state: _Store.IState): IMainLoaderFromState => ({
  getLoaderState: getLoaderState(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IMainLoaderFromDispatch => ({});

export default connect<
  IMainLoaderFromState,
  IMainLoaderFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(MainLoader);
