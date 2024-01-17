import { ReactNode } from "react";

export interface IInputTextField {
  placeholder?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  value: string | number | readonly string[];
  type?: "password" | "text" | string;
  validation?: boolean;
  valid?: boolean;
  width?: number;
  title?: ReactNode;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onBlur?: () => void;
}
