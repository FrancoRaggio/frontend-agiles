import React from "react";
import "./App.css";
import Auth from "./modules/user/auth/pages/Auth";
import Register from "./modules/user/auth/pages/Register";
import Search from "./modules/user/auth/components/Search";
import Navs from "./modules/user/auth/components/Navs";
import Logo from "./modules/user/auth/components/Logo";
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
export class Home extends React.Component {
  render(){
    return(
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center"> <Logo/></p>
              <Navs/>
              <p></p>
              <Search/>
        </div>
      </div>
    );
  }
}

