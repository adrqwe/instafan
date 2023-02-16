import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import HomePage from "./HomePage.component";
import _Store from "@Store";
import { IHomePageFromState, IHomePageFromDispatch } from "./HomePage.types";
import { mounted } from "../../models/homePageData/actions";
import { getHomePageData } from "../../models/homePageData/selectors/getHomePageData";

const mapStateToProps = (state: _Store.IState): IHomePageFromState => ({
  homePageData: getHomePageData(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IHomePageFromDispatch => ({
  mounted: () => dispatch(mounted()),
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
