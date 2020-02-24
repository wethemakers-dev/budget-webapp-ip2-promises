import React, { Component } from "react";
import Budget from "./budget/Budget";
import Signin from "./login/Signin";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Signin} />
        <Route path="/new" component={Budget} />
      </BrowserRouter>
    );
  }
}

export default App;
