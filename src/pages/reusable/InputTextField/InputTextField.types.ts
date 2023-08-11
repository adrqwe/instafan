export interface IInputTextField {
  placeholder?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  value: string | number | readonly string[];
  type?: "password" | "text" | string;
  validation?: boolean;
  valid?: boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onBlur?: () => void;
}
