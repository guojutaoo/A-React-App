import React, { Component } from "react";
import Pagination from "./common/pagination";
import BookTable from "./common/bookTable";
import ListGroup from "./common/listGroup";
import { paginate } from "./utils/paginate";
import { getGenre } from "./fakeserver/fakeGenreServer";
import { getBookList } from "./utils/fakeBookListServer";
import _ from "lodash";

class Counts extends Component {
  state = {
    currentPage: 1,
    booklist: [],
    genres: [],
    sortColumn: { path: "Title", method: "asc" },
    selectedgenre: ""
  };

  componentDidMount() {
    const genres = [{ item: "All", name: "All genre" }, ...getGenre()];
    this.setState({ booklist: getBookList(), genres: genres });
  }

  handleDelete = book => {
    const booklist = this.state.booklist.filter(b => b.id !== book.id);
    this.setState({ booklist });
  };

  handleLike = book => {
    const booklist = [...this.state.booklist];
    const index = booklist.indexOf(book);
    booklist[index] = { ...booklist[index] };
    booklist[index].liked = !booklist[index].liked;
    this.setState({ booklist });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = genre => {
    this.setState({ selectedgenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const sortColumn = this.state.sortColumn;
    const filtered =
      this.state.selectedgenre &&
      this.state.selectedgenre["name"] !== "All genre"
        ? this.state.booklist.filter(
            book => book.genre === this.state.selectedgenre["name"]
          )
        : this.state.booklist;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.method]);

    const booklistShow = paginate(sorted, this.state.currentPage, 4);
    return (
      <React.Fragment>
        <h1>{filtered.length} books in total</h1>
        <div className="row">
          <div className="col-1">
            <ul className="list-group">
              <ListGroup
                items={this.state.genres}
                selected={this.state.selectedgenre}
                onGenreSelect={this.handleGenreChange}
              />
            </ul>
          </div>
          <div className="col">
            <BookTable
              booklist={booklistShow}
              sortColumn={this.state.sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
          </div>
        </div>

        <Pagination
          itemCounts={filtered.length}
          pageSize={4}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Counts;
