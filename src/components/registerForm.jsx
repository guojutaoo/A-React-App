import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    account: { email: "", password: "", name:"" },
    errors: { email: "", password: "", name: "" }
  };
  schema = {
    email: Joi.string().required(),
    password: Joi.string()
      .required(),
    name: Joi.string()
      .required()
  };

  onSubmit = () => {
    console.log("success");
  };

  render() {
    return (
      <div>
        <h1>Regitster</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email")}
          {this.renderInput("password")}
          {this.renderInput("name")}
        </form>
        {this.renderButton("Register")}
      </div>
    );
  }
}

export default RegisterForm;
