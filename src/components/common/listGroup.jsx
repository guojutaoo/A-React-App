import React from "react";
import PropTypes from 'prop-types';

const ListGroup = props => {
  const { items, selected, onGenreSelect } = props;
  return items.map(item => (
    <li
      style={{cursor:"pointer"}}
      key={item}
      onClick={() => onGenreSelect(item)}
      className={
        selected === item ? "list-group-item active" : "list-group-item"
      }
    >
      {item["name"]}
    </li>
  ));
};
export default ListGroup;

