export interface IFormModal {
  open: boolean;
  img: string;
  imgAlt: string;
  loading: boolean;
  textArea: string;
  onClose: () => void;
  setTextArea: React.Dispatch<React.SetStateAction<string>>;
  sharePost: () => void;
}

export type IFormModalProps = IFormModal;
