export interface IMainLoader {}
export interface IMainLoaderFromState {
  getLoaderState: boolean;
}
export interface IMainLoaderFromDispatch {}

export type IMainLoaderProps = IMainLoaderFromState &
  IMainLoaderFromDispatch &
  IMainLoader;
