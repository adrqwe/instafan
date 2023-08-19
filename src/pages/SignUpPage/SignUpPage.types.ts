import {
  ICommitSignUpSuccessPayload,
  IResendCodeSignUpSuccessPayload,
  ISignUpSuccessPayload,
  ISignUpTokenSuccessPayload,
  TCommitCodeSignUpRequest,
  TResendCodeSignUpRequest,
  TSignUpRequest,
  TSignUpRequestWithBirthday,
} from "../../models/signUp/types";

export interface ISignUpPageFromState {
  getSignUpResponse: ISignUpSuccessPayload;
  getAuthToken: ISignUpTokenSuccessPayload;
  getCommitCodeResponse: ICommitSignUpSuccessPayload;
  getResendResponse: IResendCodeSignUpSuccessPayload;
}
export interface ISignUpPageFromDispatch {
  mountedCheckSignUp: (data: TSignUpRequest) => void;
  mountedSignUp: (data: TSignUpRequestWithBirthday) => void;
  mountedConfirmCodeSignUp: (data: TCommitCodeSignUpRequest) => void;
  mountedResendCodeSignUp: (data: TResendCodeSignUpRequest) => void;
}
export type ISignUpPageProps = ISignUpPageFromState & ISignUpPageFromDispatch;
