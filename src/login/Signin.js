import React, { Component } from "react";
import "./signin.css";

class Signin extends Component {
  state = {
    userE: "",
    userPass: "",
    userEmail: "",
    userName: "",
    userPassword: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleReg = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");

    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  };

  handleLog = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
  };
  render() {
    return (
      <div className="background">
        <div className="container-nav">
          <div className="form-box">
            <div className="button-box">
              <div id="btn"></div>
              <button
                type="button"
                className="toggle-btn"
                onClick={this.handleLog}
                tabIndex="-1"
              >
                Log In
              </button>
              <button
                type="button"
                className="toggle-btn"
                onClick={this.handleReg}
                tabIndex="-1"
              >
                Register
              </button>
            </div>

            <form id="login" className="input-group">
              <input
                type="text"
                className="inputField"
                placeholder="User Email"
                name="userE"
                value={this.state.userE}
                onChange={this.handleInput}
              />
              <input
                type="password"
                className="inputField"
                placeholder="Password"
                name="userPass"
                value={this.state.userPass}
                onChange={this.handleInput}
              />
              <button type="submit" className="submit-btn" tabIndex="-1">
                Login
              </button>
            </form>

            <form id="register" className="input-group">
              <input
                type="text"
                className="inputField"
                placeholder="User Name"
                name="userName"
                value={this.state.userName}
                onChange={this.handleInput}
              />
              <input
                type="email"
                className="inputField"
                placeholder="Email"
                name="userEmail"
                value={this.state.userEmail}
                onChange={this.handleInput}
              />
              <input
                type="password"
                className="inputField"
                placeholder="Password"
                name="userPassword"
                value={this.state.userPassword}
                onChange={this.handleInput}
              />

              <button type="submit" className="submit-btn" tabIndex="-1">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
