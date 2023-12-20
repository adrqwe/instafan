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

const mapStateToProps = (state: _Store.IState): IHomePageFromState => ({
  homePageData: getHomePageData(state),
  singleHomePageData: getSingleHomePageData(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IHomePageFromDispatch => ({
  mounted: () => dispatch(mounted()),
  mountedSingleHomePageData: (data) =>
    dispatch(mountedSingleHomePageData(data)),
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
