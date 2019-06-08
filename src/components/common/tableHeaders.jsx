import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.method = sortColumn.method !== "asc" ? "asc" : "desc";
    } else {
      sortColumn.path = path;
      sortColumn.method = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = path => {
    if (path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.method === "asc")
      return <i className="fa fa-sort-asc" />;
    else return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column.path)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
