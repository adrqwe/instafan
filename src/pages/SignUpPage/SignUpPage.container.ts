import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import SignUpPage from "./SignUpPage.component";
import {
  ISignUpPageFromState,
  ISignUpPageFromDispatch,
} from "./SignUpPage.types";
import { getSignUpResponse } from "../../models/signUp/selectors/getSignUpResponse";
import { getConfirmCodeResponse } from "../../models/signUp/selectors/getConfirmCodeResponse";
import {
  mountedCheckSignUp,
  mountedConfirmCodeSignUp,
  mountedResendCodeSignUp,
  mountedSignUp,
} from "../../models/signUp/actions";
import { getAuthToken } from "../../models/signUp/selectors/getAuthToken";
import { getResendResponse } from "../../models/signUp/selectors/getResendResponse";

const mapStateToProps = (state: _Store.IState): ISignUpPageFromState => ({
  getSignUpResponse: getSignUpResponse(state),
  getAuthToken: getAuthToken(state),
  getCommitCodeResponse: getConfirmCodeResponse(state),
  getResendResponse: getResendResponse(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ISignUpPageFromDispatch => ({
  mountedCheckSignUp: (data) => dispatch(mountedCheckSignUp(data)),
  mountedSignUp: (data) => dispatch(mountedSignUp(data)),
  mountedConfirmCodeSignUp: (data) => dispatch(mountedConfirmCodeSignUp(data)),
  mountedResendCodeSignUp: (data) => dispatch(mountedResendCodeSignUp(data)),
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
