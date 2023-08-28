import {
  IChangePasswordSuccessPayload,
  IConfirmAddressEmailSuccessPayload,
  TChangePasswordRequest,
  TConfirmAddressEmailRequest,
} from "../../models/passwordReset/types";
import {
  IResendCodeSignUpSuccessPayload,
  TResendCodeSignUpRequest,
} from "../../models/signUp/types";

export interface IPasswordResetPageFromState {
  getConfirmAddressEmail: IConfirmAddressEmailSuccessPayload;
  getResendCodePasswordReset: IResendCodeSignUpSuccessPayload;
  getChangePasswordResponse: IChangePasswordSuccessPayload;
}
export interface IPasswordResetPageFromDispatch {
  mountedConfirmAddressEmail: (data: TConfirmAddressEmailRequest) => void;
  mountedResendCodePasswordReset: (data: TResendCodeSignUpRequest) => void;
  mountedChangePassword: (data: TChangePasswordRequest) => void;
}
export type IPasswordResetPageProps = IPasswordResetPageFromState &
  IPasswordResetPageFromDispatch;
