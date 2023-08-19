import { BrowserRouter as Router } from "react-router-dom";

import { TransactionsProvider } from "./models/translationsContext/translationsProvider";
import Navigator from "./navigator/Navigator.component";
import config from "./config";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <TransactionsProvider value={{ activeLanguage: config.activeLanguage }}>
      <Router>
        <Navigator />
      </Router>
      <ErrorPage />
    </TransactionsProvider>
  );
}

export default App;
