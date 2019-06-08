import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { itemCounts, pageSize, currentPage, onPageChange } = props;
  const pageCounts = Math.ceil(itemCounts / pageSize);
  const pages = _.range(1, pageCounts + 1);
  if (pages.length === 1) {
    return null;
  }
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.proptype = {
  itemCounts: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
export default Pagination;
