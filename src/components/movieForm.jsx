import React, { Component } from "react";

const MovieTable = ({ match, history }) => {
  return (
    <div>
      <h1>{match.params.id}</h1>
      <button className="btn btn-primary" onClick={() => history.push("/movies")}>
        Save
      </button>
    </div>
  );
};

export default MovieTable;