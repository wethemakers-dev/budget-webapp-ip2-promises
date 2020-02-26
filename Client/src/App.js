import React, { Component } from "../node_modules/@types/react";
import Budget from "./budget/Budget";
import Signin from "./login/Signin";
import { BrowserRouter, Route } from "./node_modules/react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Signin} />
        <Route path="/Budget" component={Budget} />
      </BrowserRouter>
    );
  }
}

export default App;
