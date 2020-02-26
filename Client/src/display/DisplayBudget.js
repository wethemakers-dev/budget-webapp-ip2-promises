import React from "../../node_modules/@types/react";
import BalanceDisplay from "./BalanceDisplay";
import ExpensesList from "./ExpensesList";

const DisplayBudget = () => {
  return (
    <div className="card card-body">
      <h3 className="text-center">Your Budget Info</h3>
      <BalanceDisplay />
      <ExpensesList />
    </div>
  );
};

export default DisplayBudget;
