export interface IErrorPageFromState {
  getAuthTokenFailure: Error | null;
  getConfirmCodeResponseFailure: Error | null;
  getSignUpResponseFailure: Error | null;
  getResendResponseFailure: Error | null;
  getLogInFailure: Error | null;
  getConfirmAddressEmailFailure: Error | null;
  getResendCodePasswordResetFailure: Error | null;
  getChangePasswordResponseFailure: Error | null;
}
export interface IErrorPageFromDispatch {}
export type IErrorPageProps = IErrorPageFromState & IErrorPageFromDispatch;
