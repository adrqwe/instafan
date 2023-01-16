import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TransactionsProvider } from "./models/translationsContext/translationsProvider";

import Navigator from "./navigator/Navigator.component";
import Modal from "./pages/reusable/Modal";
import HomePage from "./pages/HomePage";
import IframeChild from "./pages/IframeChild";

function App() {
  return (
    <TransactionsProvider value={{ activeLanguage: "PL" }}>
      <Router>
        <Navigator />
      </Router>
    </TransactionsProvider> //cows
  );
}

export default App;
