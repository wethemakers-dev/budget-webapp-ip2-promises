import React, { Component } from "react";
import Budget from "./budget/Budget";
import Signin from "./login/Signin";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./display/dashboard/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Signin} />
        <Route path="/Budget" component={Budget} />
        <Route path="/Dashboard" component={Dashboard} />
      </BrowserRouter>
    );
  }
}

export default App;
