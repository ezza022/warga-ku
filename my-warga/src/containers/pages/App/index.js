//libraries
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//components
import Navbar from "../../../components/Navbar";
//pages
import Home from "../Home";
import Profile from "../Profile";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}
