import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import CreatePostPage from "./CreatePostPage.component";
import {
  ICreatePostPageFromState,
  ICreatePostPageFromDispatch,
} from "./CreatePostPage.types";
import { mountedCreatePost } from "../../models/posts/actions";
import { getCheckExistTokenDetails } from "../../models/logIn/selectors/getCheckExistTokenDetails";
import { getCurrentToken } from "../../models/logIn/selectors/getCurrentToken";
import { getCreatePostResponse } from "../../models/posts/selectors/getCreatePostResponse";

const mapStateToProps = (state: _Store.IState): ICreatePostPageFromState => ({
  getCheckExistTokenDetails: getCheckExistTokenDetails(state),
  getCurrentToken: getCurrentToken(state),
  getCreatePostResponse: getCreatePostResponse(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ICreatePostPageFromDispatch => ({
  mountedCreatePost: (data) => dispatch(mountedCreatePost(data)),
});

export default connect<
  ICreatePostPageFromState,
  ICreatePostPageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostPage);
