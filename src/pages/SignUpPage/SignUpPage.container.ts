import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import SignUpPage from "./SignUpPage.component";
import {
  ISignUpPageFromState,
  ISignUpPageFromDispatch,
} from "./SignUpPage.types";

const mapStateToProps = (state: _Store.IState): ISignUpPageFromState => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ISignUpPageFromDispatch => ({});
export default connect<
  ISignUpPageFromState,
  ISignUpPageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
