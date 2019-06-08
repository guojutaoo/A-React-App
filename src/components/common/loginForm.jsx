import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class LoginForm extends Component {
  //   username = React.createRef();
  state = {
    account: { username: "", password: "" },
    errors: { username: "", password: "" }
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  validationProperty = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
        errors[item.path] = item.message;
      }
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validationProperty();
    this.setState({ errors: errors || {} });
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            show="Username"
            error={this.state.errors.username}
            handleChange={this.handleChange}
          />
          <Input
            name="password"
            show="Password"
            error={this.state.errors.password}
            handleChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
