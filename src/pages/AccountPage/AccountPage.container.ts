import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import CreatePostPage from "./AccountPage.component";
import {
  IAccountPageFromState,
  IAccountPageFromDispatch,
} from "./AccountPage.types";
import { getCheckExistTokenDetails } from "../../models/logIn/selectors/getCheckExistTokenDetails";

const mapStateToProps = (state: _Store.IState): IAccountPageFromState => ({
  getCheckExistTokenDetails: getCheckExistTokenDetails(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IAccountPageFromDispatch => ({});

export default connect<
  IAccountPageFromState,
  IAccountPageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostPage);
