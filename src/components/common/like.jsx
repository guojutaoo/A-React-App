import React from "react";

const Like = props => {
  let heartClass = "fa fa-heart";
  if (props.liked === false) {
    heartClass += "-o";
  }
  return (
    <i
      className={heartClass}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    />
  );
};

export default Like;
