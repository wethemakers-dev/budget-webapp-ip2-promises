import React, { Component } from "react";
import "./signin.css";
import axios from "axios";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";

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

  handleLogin = e => {
    e.preventDefault();
    if (this.state.userE !== "" && this.state.userPass !== "") {
      axios
        .post("http://localhost:3007/users/login", {
          userE: this.state.userE,
          userPass: this.state.userPass
        })
        .then(({ data }) => {
          localStorage.setItem("user", JSON.stringify(data));
          this.props.history.push("../budget/Budget");
        });
    } else if (this.state.userE === "" && this.state.userPass !== "") {
      ToastsStore.error("Hey, you must enter the email!");
    } else if (this.state.userE !== "" && this.state.userPass === "") {
      ToastsStore.error("Hey, you must enter the password!");
    } else if (this.state.userE === "" && this.state.userPass === "") {
      ToastsStore.error("Hey, you must enter the email & the password!");
    }
  };

  handleRegister = e => {
    e.preventDefault();
    if (
      this.state.userEmail !== "" &&
      this.state.userPassword !== "" &&
      this.state.userName !== ""
    ) {
      axios
        .post("http://localhost:3007/users/insert", {
          userEmail: this.state.userEmail,
          userName: this.state.userName,
          userPassword: this.state.userPassword
        })
        .then(({ data }) => {
          localStorage.setItem("user", JSON.stringify(data));
          this.props.history.push("../budget/Budget");
        });
    } else if (
      this.state.userEmail === "" &&
      this.state.userPassword !== "" &&
      this.state.userName !== ""
    ) {
      ToastsStore.error("Hey, you must enter the email!");
    } else if (
      this.state.userEmail !== "" &&
      this.state.userPassword === "" &&
      this.state.userName !== ""
    ) {
      ToastsStore.error("Hey, you must enter the password!");
    } else if (
      this.state.userEmail === "" &&
      this.state.userPassword === "" &&
      this.state.userName === ""
    ) {
      ToastsStore.error(
        "Hey, you must enter the email & the user name & the password!"
      );
    } else if (
      this.state.userEmail !== "" &&
      this.state.userPassword !== "" &&
      this.state.userName === ""
    ) {
      ToastsStore.error("Hey, you must enter the user name");
    } else if (this.state.userPassword.length < 7) {
      ToastsStore.error("Hey, The password must be at least 8 characters long");
    }
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

            <form
              id="login"
              className="input-group"
              onSubmit={this.handleLogin}
            >
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

            <form
              id="register"
              className="input-group"
              onSubmit={this.handleRegister}
            >
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
              <ToastsContainer
                position={ToastsContainerPosition.BOTTOM_LEFT}
                store={ToastsStore}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
