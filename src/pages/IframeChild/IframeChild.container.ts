import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import IframeChild from "./IframeChild.component";
import _Store from "@Store";
import {
  IFrameChildFromState,
  IFrameChildFromDispatch,
} from "./IframeChild.types";
import { getUrl } from "../../models/url/actions";
import { getCurrentUrl } from "../../models/url/selectors/getCurrentUrl";

const mapStateToProps = (state: _Store.IState): IFrameChildFromState => ({
  url: getCurrentUrl(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IFrameChildFromDispatch => ({
  getUrl: (params) => dispatch(getUrl(params)),
});

export default connect<
  IFrameChildFromState,
  IFrameChildFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(IframeChild);
