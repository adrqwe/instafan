import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import ErrorPage from "./ErrorPage.component";
import { IErrorPageFromState, IErrorPageFromDispatch } from "./ErrorPage.types";
import { getAuthTokenFailure } from "../../models/signUp/selectors/getAuthTokenFailure";
import { getConfirmCodeResponseFailure } from "../../models/signUp/selectors/getConfirmCodeResponseFailure";
import { getSignUpResponseFailure } from "../../models/signUp/selectors/getSignUpResponseFailure";
import { getResendResponseFailure } from "../../models/signUp/selectors/getResendResponseFailure";
import { getLogInFailure } from "../../models/logIn/selectors/getLogInFailure";
import { getConfirmAddressEmailFailure } from "../../models/passwordReset/selectors/getConfirmAddressEmailFailure";
import { getResendCodePasswordResetFailure } from "../../models/passwordReset/selectors/getResendCodePasswordResetFailure";
import { getChangePasswordResponseFailure } from "../../models/passwordReset/selectors/getChangePasswordFailure";

const mapStateToProps = (state: _Store.IState): IErrorPageFromState => ({
  getAuthTokenFailure: getAuthTokenFailure(state),
  getConfirmCodeResponseFailure: getConfirmCodeResponseFailure(state),
  getSignUpResponseFailure: getSignUpResponseFailure(state),
  getResendResponseFailure: getResendResponseFailure(state),
  getLogInFailure: getLogInFailure(state),
  getConfirmAddressEmailFailure: getConfirmAddressEmailFailure(state),
  getResendCodePasswordResetFailure: getResendCodePasswordResetFailure(state),
  getChangePasswordResponseFailure: getChangePasswordResponseFailure(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IErrorPageFromDispatch => ({});
export default connect<
  IErrorPageFromState,
  IErrorPageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(ErrorPage);
