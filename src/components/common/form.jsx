import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = { account: {}, errors: {} };

  validation = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let error of result.error.details) {
      errors[error.path] = error.message;
    }
    return errors;
  };

  validationProperty = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let error of result.error.details) {
      errors[error.path] = error.message;
    }
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validation();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account });
    const errors = this.validationProperty(account[input.id]);
    this.setState({ errors: errors || {} });
  };

  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validation()}>
        {label}
      </button>
    );
  }

  renderSelect(labels, options, error) {
    // {error} = this.state.error
    return (
      <Select name={labels} show={labels} options={options} error={error} handleChange={this.handleChange}/>
    );
  }

  renderInput(name, value) {
    return (
      <Input
        name={name}
        show={name}
        ref={this[name]}
        value={value}
        error={this.state.errors[name]}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Form;
