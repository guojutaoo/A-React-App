import React, { Component } from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.show}</label>
      <input
        id={props.name}
        type="text"
        onChange={props.handleChange}
        className="form-control"
        value={props.new}
        placeholder={props.value}
      />
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default Input;
