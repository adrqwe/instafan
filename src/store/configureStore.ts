import _Store from "@Store";
import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import createEnhancersComposer from "./createEnhancersComposer";
import rootEpic from "./rootEpic";
import rootReducer from "./rootReducer";
import services from "./services";

const epicMiddleware = createEpicMiddleware<
  _Store.IAction,
  _Store.IAction,
  _Store.IState,
  _Store.IService
>({
  dependencies: services,
});
const enhancersComposer = createEnhancersComposer();
export default function configureStore(preLoadedState?: object) {
  const store = createStore(
    rootReducer,
    preLoadedState,
    enhancersComposer(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
}
