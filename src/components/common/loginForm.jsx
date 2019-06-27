import React, { Component } from "react";
import Form from "./form";
import Joi from "joi-browser";

class LoginForm extends Form {
  username = React.createRef();
  state = {
    account: { username: "", password: "" },
    errors: { username: "", password: "" }
  };
  schema = {
    username: Joi.string()
      .required()
      .min(1)
      .max(7)
      .label("Username"),
    password: Joi.string()
      .required()
      .min(3)
      .max(13)
      .label("Password")
  };

  doSubmit = () => {
    console.log(this.state.account);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username")}
          {this.renderInput("password")}
        </form>
        {this.renderButton("Login")}
      </div>
    );
  }
}

export default LoginForm;
