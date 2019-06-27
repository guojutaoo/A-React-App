import React, { Component } from "react";
import { toastify } from "react-toastify";
import Pagination from "./common/pagination";
import BookTable from "./common/bookTable";
import ListGroup from "./common/listGroup";
import SearchBox from "./common/searchBox";
import { paginate } from "./utils/paginate";
import { getGenres } from "./fakeserver/genreServer";
import { getBookList, getMovie, addMovie } from "./utils/fakeBookListServer";
import { Link } from "react-router-dom";
import "../App.css";
import _ from "lodash";v
import httpService from "./services/httpService";

class Counts extends Component {
  state = {
    currentPage: 1,
    booklist: [],
    genres: [],
    sortColumn: { path: "Title", method: "asc" },
    selectedGenre: "",
    searchQuery: ""
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ item: "All", name: "All genre" }, ...data];
    const movies = getBookList();
    console.log(movies);
    this.setState({ booklist: movies, genres: genres });
  }

  handleDelete = async book => {
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      selectedGenre: "All genre",
      currentPage: 1
    });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { searchQuery } = this.state;
    const sortColumn = this.state.sortColumn;
    let filtered = this.state.booklist;
    if (searchQuery) {
      filtered = this.state.booklist.filter(item =>
        item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered =
        this.state.selectedGenre &&
        this.state.selectedGenre["name"] !== "All genre"
          ? this.state.booklist.filter(
              book => book.genre === this.state.selectedGenre["name"]
            )
          : this.state.booklist;
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.method]);

    const booklistShow = paginate(sorted, this.state.currentPage, 4);
    return (
      <React.Fragment>
        <h1 id="maintitle">{filtered.length} books in total</h1>
        <Link
          to="/movies/new"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          New movie
        </Link>
        <div className="row">
          <div className="col-1">
            <ul className="list-group">
              <ListGroup
                items={this.state.genres}
                selected={this.state.selectedGenre}
                onGenreSelect={this.handleGenreChange}
              />
            </ul>
          </div>
          <div className="col">
            <SearchBox
              onChange={this.handleSearch}
              value={this.state.searchQuery}
            />
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
