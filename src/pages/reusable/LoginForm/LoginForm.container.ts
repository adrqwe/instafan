import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import LoginForm from "./LoginForm.component";
import { ILoginFormFromState, ILoginFormFromDispatch } from "./LoginForm.types";
import { getLogInDetails } from "../../../models/logIn/selectors/getLogInDetails";
import { mountedLogIn } from "../../../models/logIn/actions";

const mapStateToProps = (state: _Store.IState): ILoginFormFromState => ({
  getLogInDetails: getLogInDetails(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ILoginFormFromDispatch => ({
  mountedLogIn: (data) => dispatch(mountedLogIn(data)),
});

export default connect<
  ILoginFormFromState,
  ILoginFormFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
