export interface ICommitCode {
  email: string;
  code: string;
  errorMessages: string[];
  commitMessage: string;
  onSubmit: JSX.Element;
  children?: JSX.Element;
  onResend: () => void;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  backButton?: () => JSX.Element;
}
