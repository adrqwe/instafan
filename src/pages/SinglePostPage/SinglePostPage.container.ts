import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import SinglePostPage from "./SinglePostPage.component";
import {
  ISinglePostPageFromState,
  ISinglePostPageFromDispatch,
} from "./SinglePostPage.types";
import { mountedSingleHomePageData } from "../../models/homePageData/actions";
import { getSingleHomePageData } from "../../models/homePageData/selectors/getSingleHomePageData";
import { getCurrentToken } from "../../models/logIn/selectors/getCurrentToken";
import {
  mountedAddComment,
  mountedLikeThePost,
} from "../../models/posts/actions";
import { getCheckExistTokenDetails } from "../../models/logIn/selectors/getCheckExistTokenDetails";
import { getAddCommentResponse } from "../../models/posts/selectors/getAddCommentResponse";

const mapStateToProps = (state: _Store.IState): ISinglePostPageFromState => ({
  singleHomePageData: getSingleHomePageData(state),
  getCurrentToken: getCurrentToken(state),
  getCheckExistTokenDetails: getCheckExistTokenDetails(state),
  getAddCommentResponse: getAddCommentResponse(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ISinglePostPageFromDispatch => ({
  mountedSingleHomePageData: (data) =>
    dispatch(mountedSingleHomePageData(data)),
  mountedAddComment: (data) => dispatch(mountedAddComment(data)),
  mountedLikeThePost: (data) => dispatch(mountedLikeThePost(data)),
});

export default connect<
  ISinglePostPageFromState,
  ISinglePostPageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(SinglePostPage);
