import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { BudgetConsumer } from "../../store";
import { Link } from "react-router-dom";
import NavbarDash from "../../navbarDash";
import "../dashboard/Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashData: {
        labels: [],
        datasets: [
          {
            label: "Amount",
            data: [],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,192,192,0.6)",
              "rgba(153,102,255,0.6)",
              "rgba(255,159,64,0.6)",
              "rgba(255,99,132,0.6)",
              "rgba(255,80,100,0.6)",
              "rgba(207,109,132,0.6)",
              "rgba(255,99,132,0.6)"
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"
          }
        ]
      }
    };
  }

  render() {
    return (
      <>
        <div>
          <NavbarDash />
          <div className="chart">
            <div className="container-Dashboard">
              <BudgetConsumer>
                {value => {
                  value.expenses.map((expense, index) => {
                    this.state.dashData.labels[index] = expense.title;
                    this.state.dashData.datasets[0].data[index] =
                      expense.amount;
                  });
                }}
              </BudgetConsumer>
              <Bar
                data={this.state.dashData}
                options={{
                  title: {
                    display: true,
                    text: "Bar Chart",
                    fontSize: 25,
                    fontColor: "#343a40"
                  },
                  legend: {
                    display: true,
                    position: "right"
                  }
                }}
              />

              <hr />

              <Line
                data={this.state.dashData}
                options={{
                  title: {
                    display: true,
                    text: "Line Chart",
                    fontSize: 25,
                    fontColor: "#343a40"
                  },
                  legend: {
                    display: true,
                    position: "right"
                  }
                }}
              />

              <hr />

              <Pie
                data={this.state.dashData}
                options={{
                  title: {
                    display: true,
                    text: "Pie Chart",
                    fontSize: 25,
                    fontColor: "#343a40"
                  },
                  legend: {
                    display: true,
                    position: "right"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
