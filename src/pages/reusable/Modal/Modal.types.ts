export interface IModal {
  open: boolean;
  title: string;
  width?: number;
  footer?: any;
  children?: any;
  handleClose: () => void;
}
