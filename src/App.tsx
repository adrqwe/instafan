import { BrowserRouter as Router } from "react-router-dom";

import { TransactionsProvider } from "./models/translationsContext/translationsProvider";
import Navigator from "./navigator/Navigator.component";
import config from "./config";

function App() {
  return (
    <TransactionsProvider value={{ activeLanguage: config.activeLanguage }}>
      <Router>
        <Navigator />
      </Router>
    </TransactionsProvider>
  );
}

export default App;
