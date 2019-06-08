import React, { Component } from "react";
import Like from "./like";
import { Link } from "react-router-dom";

class TableBody extends Component {
  render() {
    const { data, onLike, onDelete } = this.props;
    return data.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </td>
        <td>{item.genre}</td>
        <td>
          <Like liked={item.liked} key={item.id} onClick={() => onLike(item)} />
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            key={item.id}
            onClick={() => onDelete(item)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }
}

export default TableBody;
