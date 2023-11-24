import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import Navigator from "./Navigator.component";
import { INavigatorFromState, INavigatorFromDispatch } from "./Navigator.types";
import { mountedCheckExistToken } from "../models/logIn/actions";
import { getCheckExistTokenDetails } from "../models/logIn/selectors/getCheckExistTokenDetails";

const mapStateToProps = (state: _Store.IState): INavigatorFromState => ({
  getCheckExistTokenDetails: getCheckExistTokenDetails(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): INavigatorFromDispatch => ({
  mountedCheckExistToken: (data) => dispatch(mountedCheckExistToken(data)),
});

export default connect<
  INavigatorFromState,
  INavigatorFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(Navigator);
