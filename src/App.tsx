import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { TransactionsProvider } from "./models/translationsContext/translationsProvider";
import Navigator from "./navigator/Navigator.component";

function App() {
  return (
    <TransactionsProvider value={{ activeLanguage: "EN" }}>
      <Router>
        <Navigator />
      </Router>
    </TransactionsProvider>
  );
}

export default App;
