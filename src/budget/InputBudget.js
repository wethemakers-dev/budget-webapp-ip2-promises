import React, { Component } from "react";
import { BudgetConsumer } from "../store";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";

class InputBudget extends Component {
  state = {
    budget: "",
    mistake: {
      budget: ""
    }
  };

  handleEmptyBudget = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let mistake = this.state.mistake;

    switch (name) {
      case "budget":
        mistake.budget = value === "" ? "You must enter The Budget!" : "";
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
    if (this.state.budget === "") {
      ToastsStore.error("Hey, you must enter the budget!");
    } else {
      dispatch({
        type: "ADD_BUDGET",
        budget: this.state.budget
      });
    }
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
                  name="budget"
                />
                <button
                  onClick={this.handleSubmit.bind(this, dispatch)}
                  className="btn btn-dark"
                >
                  Submit
                </button>
                <span className="errorMessage">{mistake.budget}</span>
              </form>
            </div>
          );
        }}
      </BudgetConsumer>
    );
  }
}
export default InputBudget;
