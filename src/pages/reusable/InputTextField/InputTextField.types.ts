export interface IInputTextField {
  placeholder?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  value: string | number | readonly string[];
  type?: "password" | "text" | string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
