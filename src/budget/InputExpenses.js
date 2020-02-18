import React, { Component } from "react";
import { BudgetConsumer } from "../store";

class InputExpenses extends Component {
  state = {
    expenses: [],
    expenseTitle: "",
    amount: "",
    errors: {
      expenseTitle: "",
      amount: ""
    }
  };

  handleEmpty = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "expenseTitle":
        errors.expenseTitle = value === "" ? "You must enter an expense!" : "";
        break;
      case "amount":
        errors.amount = value === "" ? "You must enter the amount!" : "";
        break;
      default:
        break;
    }
  };

  handleInput = e => {
    this.handleEmpty(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_EXPENSES",
      expenses: this.state.expenses
    });
  };

  addExpenses = () => {
    if (this.state.expenseTitle === "" || this.state.amount === "") {
      /* Need to return here! */
      alert("Nop!");
    } else if (isNaN(this.state.expenseTitle)) {
      this.setState({
        expenses: [
          ...this.state.expenses,
          { title: this.state.expenseTitle, amount: this.state.amount }
        ],
        expenseTitle: "",
        amount: ""
      });
    } else {
      console.log("its not a string!");
    }
  };
  render() {
    const { errors } = this.state;
    let subE = "";
    return (
      <BudgetConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body left">
              <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                <label>Expenses</label>
                <input
                  onChange={this.handleInput}
                  value={this.state.expenseTitle}
                  className="form-control"
                  name="expenseTitle"
                  placeholder="Enter your expenses"
                />
                <span className="errorMessage">{errors.expenseTitle}</span>
                <br />
                <label>Amount</label>
                <input
                  onChange={this.handleInput}
                  value={this.state.amount}
                  className="form-control"
                  name="amount"
                  placeholder="0.0"
                  type="number"
                />
                <span className="errorMessage">{errors.amount}</span>

                <button
                  onClick={this.addExpenses}
                  className="btn btn-dark btn-block mt-3"
                >
                  Add
                </button>
              </form>
            </div>
          );
        }}
      </BudgetConsumer>
    );
  }
}

export default InputExpenses;
