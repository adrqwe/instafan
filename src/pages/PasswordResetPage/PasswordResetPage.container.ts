import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import PasswordResetPage from "./PasswordResetPage.component";
import {
  IPasswordResetPageFromState,
  IPasswordResetPageFromDispatch,
} from "./PasswordResetPage.types";
import { getConfirmAddressEmail } from "../../models/passwordReset/selectors/getConfirmAddressEmail";
import {
  mountedChangePassword,
  mountedConfirmAddressEmail,
  mountedResendCodePasswordReset,
} from "../../models/passwordReset/actions";
import { getResendCodePasswordReset } from "../../models/passwordReset/selectors/getResendCodePasswordReset";
import { getChangePasswordResponse } from "../../models/passwordReset/selectors/getChangePassword";

const mapStateToProps = (
  state: _Store.IState
): IPasswordResetPageFromState => ({
  getConfirmAddressEmail: getConfirmAddressEmail(state),
  getResendCodePasswordReset: getResendCodePasswordReset(state),
  getChangePasswordResponse: getChangePasswordResponse(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IPasswordResetPageFromDispatch => ({
  mountedConfirmAddressEmail: (data) =>
    dispatch(mountedConfirmAddressEmail(data)),
  mountedResendCodePasswordReset: (data) =>
    dispatch(mountedResendCodePasswordReset(data)),
  mountedChangePassword: (data) => dispatch(mountedChangePassword(data)),
});
export default connect<
  IPasswordResetPageFromState,
  IPasswordResetPageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(PasswordResetPage);
