import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import SignUpPage from "./SignUpPage.component";
import {
  ISignUpPageFromState,
  ISignUpPageFromDispatch,
} from "./SignUpPage.types";
import { getSignUpResponse } from "../../models/signUp/selectors/getSignUpResponse";
import { mountedSignUp } from "../../models/signUp/actions";

const mapStateToProps = (state: _Store.IState): ISignUpPageFromState => ({
  getSignUpResponse: getSignUpResponse(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ISignUpPageFromDispatch => ({
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
