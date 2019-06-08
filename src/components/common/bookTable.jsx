import React, { Component } from "react";
import TableHeader from "./tableHeaders";
import TableBody from "./tableBody";
class BookTables extends Component {
  columns = [
    { path: "id", label: "Id" },
    { path: "title", label: "Title" },
    { path: "genre", label: "Genre" },
    { key: "like", label: "" },
    { key: "delete", label: "" }
  ];

  render() {
    const { booklist, onLike, onDelete, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <tbody>
          <TableBody data={booklist} onLike={onLike} onDelete={onDelete} />
        </tbody>
      </table>
    );
  }
}

export default BookTables;
