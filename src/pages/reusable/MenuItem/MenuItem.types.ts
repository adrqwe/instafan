import { ReactElement } from "react";

export interface IMenuItem {
  text: string;
  icon: ReactElement;
  route?: string;
  style?: React.CSSProperties | undefined;
}
