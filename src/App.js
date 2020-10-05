import React from "react";
import "./App.css";
import Auth from "./modules/user/auth/pages/Auth";
import Register from "./modules/user/auth/pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
