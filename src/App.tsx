import { BrowserRouter as Router } from "react-router-dom";

import { TransactionsProvider } from "./models/translationsContext/translationsProvider";
import Navigator from "./navigator";
import ErrorPage from "./pages/ErrorPage";
import config from "./config";
import { theme } from "./theme";
import MainLoader from "./pages/reusable/MainLoader";

document.body.style.backgroundColor = theme.palette.secondary.main;
document.body.style.color = theme.palette.secondary.light;

function App() {
  return (
    <TransactionsProvider value={{ activeLanguage: config.activeLanguage }}>
      <Router>
        <Navigator />
      </Router>
      <ErrorPage />
      <MainLoader />
    </TransactionsProvider>
  );
}

export default App;
