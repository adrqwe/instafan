export interface IModalFromState {}
export interface IModalFromDispatch {}
export interface IModalOwnProps {
  icon: JSX.Element;
  children: JSX.Element;
  badge?: boolean;
  shopCart?: boolean;
}
export type IModalProps = IModalFromState & IModalFromDispatch & IModalOwnProps;
