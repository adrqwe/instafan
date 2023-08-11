import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import SignUpPage from "./SignUpPage.component";
import {
  ISignUpPageFromState,
  ISignUpPageFromDispatch,
} from "./SignUpPage.types";
import { getSignUpResponse } from "../../models/signUp/selectors/getSignUpResponse";
import { mountedCheckSignUp, mountedSignUp } from "../../models/signUp/actions";
import { getAuthToken } from "../../models/signUp/selectors/getAuthToken";

const mapStateToProps = (state: _Store.IState): ISignUpPageFromState => ({
  getSignUpResponse: getSignUpResponse(state),
  getAuthToken: getAuthToken(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ISignUpPageFromDispatch => ({
  mountedCheckSignUp: (data) => dispatch(mountedCheckSignUp(data)),
  mountedSignUp: (data) => dispatch(mountedSignUp(data)),
});
export default connect<
  ISignUpPageFromState,
  ISignUpPageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
