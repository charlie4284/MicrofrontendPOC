import React from "react";
import ReactDOM from "react-dom";

import SignIn from "./containers/SignIn";

const App = () => (
  <div className="container">
    <SignIn />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
