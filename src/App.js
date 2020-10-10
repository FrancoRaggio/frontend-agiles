import React from "react";
import "./App.css";
import Auth from "./modules/user/auth/pages/Auth";
import Register from "./modules/user/auth/pages/Register";
import Home from "./modules/home/pages/Home";
import About from "./modules/home/pages/About";
import AddPost from "./modules/pet/pages/AddPost";
import Map from "./modules/map/pages/Map";
import Footer from "./modules/layouts/Footer";
import Advert from "./modules/home/pages/Advert ";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Auth} />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/add-post" component={AddPost} />
          <Route exact path="/map" component={Map} />
        </Switch>
      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;