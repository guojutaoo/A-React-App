import React from "react";

const Select = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.show}</label>
      <select name={props.name} id={props.name} onChange={props.handleChange} className="form-control">
        <option value="" />
          {props.options.map(option => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
      </select>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default Select;
