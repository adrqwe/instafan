export interface IFrameChildFromState {
  url: string;
}
export interface IFrameChildFromDispatch {
  getUrl: (params: string) => void;
}
export type IFrameChildProps = IFrameChildFromState & IFrameChildFromDispatch;
