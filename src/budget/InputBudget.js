import React, { Component } from "react";
import { BudgetConsumer } from "../store";

class InputBudget extends Component {
  state = {
    Budget: "",
    mistake: {
      Budget: ""
    }
  };

  handleEmptyBudget = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let mistake = this.state.mistake;

    switch (name) {
      case "budgetMain":
        mistake.budgetMain = value === "" ? "You must enter The Budget!" : "";
        break;
      default:
        break;
    }
  };

  handleInput = e => {
    this.handleEmptyBudget(e);
    this.setState({ budget: e.target.value });
  };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BUDGET",
      budget: this.state.budget
    });
  };

  render() {
    const { mistake } = this.state;
    return (
      <BudgetConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 left">
              <label>Your Budget</label>
              <form className="form-inline">
                <input
                  onChange={this.handleInput}
                  value={this.state.budget}
                  className="form-control mr-2"
                  type="number"
                  placeholder="Enter your budget"
                  name="budgetMain"
                />
                <button
                  onClick={this.handleSubmit.bind(this, dispatch)}
                  className="btn btn-dark"
                >
                  Submit
                </button>
                <span className="errorMessage">{mistake.budgetMain}</span>
              </form>
            </div>
          );
        }}
      </BudgetConsumer>
    );
  }
}
export default InputBudget;
