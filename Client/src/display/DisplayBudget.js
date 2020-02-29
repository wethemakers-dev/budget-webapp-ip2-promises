import React from "react";
import BalanceDisplay from "./BalanceDisplay";
import ExpensesList from "./ExpensesList";

const DisplayBudget = () => {
  return (
    <>
      <div className="card card-body">
        <h3 className="text-center">Your Budget Information</h3>
        <BalanceDisplay />
        <ExpensesList />
      </div>
    </>
  );
};

export default DisplayBudget;
