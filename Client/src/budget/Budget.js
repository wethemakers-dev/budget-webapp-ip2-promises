import React from "react";
import InputBudget from "./InputBudget";
import InputExpenses from "./InputExpenses";
import DisplayBudget from "../display/DisplayBudget";
import Navbar from "../navbar";
import "../App.css";
const user = JSON.parse(localStorage.getItem("user"));
const Budget = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4">
            <InputBudget />
            <InputExpenses />
          </div>
          <div className="col-lg-8">
            <DisplayBudget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
