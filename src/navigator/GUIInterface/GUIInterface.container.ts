import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import GUIInterface from "./GUIInterface.component";
import {
  IGUIInterfaceFromState,
  IGUIInterfaceFromDispatch,
} from "./GUIInterface.types";
import { mountedCheckExistToken } from "../../models/logIn/actions";
import { getCheckExistTokenDetails } from "../../models/logIn/selectors/getCheckExistTokenDetails";
import { getLogInDetails } from "../../models/logIn/selectors/getLogInDetails";

const mapStateToProps = (state: _Store.IState): IGUIInterfaceFromState => ({
  getCheckExistTokenDetails: getCheckExistTokenDetails(state),
  getLogInDetails: getLogInDetails(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IGUIInterfaceFromDispatch => ({
  mountedCheckExistToken: (data) => dispatch(mountedCheckExistToken(data)),
});

export default connect<
  IGUIInterfaceFromState,
  IGUIInterfaceFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(GUIInterface);
