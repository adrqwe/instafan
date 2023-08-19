export interface IErrorPageFromState {
  getAuthTokenFailure: Error | null;
  getConfirmCodeResponseFailure: Error | null;
  getSignUpResponseFailure: Error | null;
  getResendResponseFailure: Error | null;
}
export interface IErrorPageFromDispatch {}
export type IErrorPageProps = IErrorPageFromState & IErrorPageFromDispatch;
