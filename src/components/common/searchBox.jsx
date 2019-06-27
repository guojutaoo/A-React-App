import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      name="search"
      id = "search"
      placeholder="search.."
      className="form-control my-3"
      valuew={value}
      onChange={e => {
        onChange(e.currentTarget.value);
      }}
    />
  );
};

export default SearchBox;
