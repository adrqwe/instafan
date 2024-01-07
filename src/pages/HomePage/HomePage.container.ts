import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import HomePage from "./HomePage.component";
import { IHomePageFromState, IHomePageFromDispatch } from "./HomePage.types";
import {
  mounted,
  mountedSingleHomePageData,
} from "../../models/homePageData/actions";
import { getHomePageData } from "../../models/homePageData/selectors/getHomePageData";
import { getSingleHomePageData } from "../../models/homePageData/selectors/getSingleHomePageData";
import {
  mountedAddComment,
  mountedLikeThePost,
} from "../../models/posts/actions";
import { getAddCommentResponse } from "../../models/posts/selectors/getAddCommentResponse";
import { getCheckExistTokenDetails } from "../../models/logIn/selectors/getCheckExistTokenDetails";
import { getCurrentToken } from "../../models/logIn/selectors/getCurrentToken";

const mapStateToProps = (state: _Store.IState): IHomePageFromState => ({
  homePageData: getHomePageData(state),
  singleHomePageData: getSingleHomePageData(state),
  getAddCommentResponse: getAddCommentResponse(state),
  getCheckExistTokenDetails: getCheckExistTokenDetails(state),
  getCurrentToken: getCurrentToken(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IHomePageFromDispatch => ({
  mounted: () => dispatch(mounted()),
  mountedSingleHomePageData: (data) =>
    dispatch(mountedSingleHomePageData(data)),
  mountedAddComment: (data) => dispatch(mountedAddComment(data)),
  mountedLikeThePost: (data) => dispatch(mountedLikeThePost(data)),
});
export default connect<
  IHomePageFromState,
  IHomePageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
