import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./store/configureStore";
import preLoadedState from "./store/preLoadedState";

const store = configureStore(preLoadedState);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
