import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import LoginPage from "./LoginPage.component";
import { ILoginPageFromState, ILoginPageFromDispatch } from "./LoginPage.types";

const mapStateToProps = (state: _Store.IState): ILoginPageFromState => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ILoginPageFromDispatch => ({});
export default connect<
  ILoginPageFromState,
  ILoginPageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
