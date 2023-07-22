import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import LoginForm from "./LoginForm.component";
import { ILoginFormFromState, ILoginFormFromDispatch } from "./LoginForm.types";

const mapStateToProps = (state: _Store.IState): ILoginFormFromState => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ILoginFormFromDispatch => ({});
export default connect<
  ILoginFormFromState,
  ILoginFormFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
