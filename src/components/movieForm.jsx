import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenre } from "./fakeserver/fakeGenreServer";
import { getBookList, getMovie, addMovie } from "./utils/fakeBookListServer";

class MovieForm extends Form {
  state = {
    account: { id: "", genres: "", title:"" },
    // errors: { username: "", password: "" },
    data: {
      id: {},
      genre: {},
      title: {},
      liked: {}
    },
    genres: [],
    errors: {}
  };

  schema = {
    id: Joi.number()
      .min(1)
      .required(),
    genres: Joi.string()
      .required(),
    title: Joi.string()
      .min(1)
      .max(20)
      .required()
  };

  componentDidMount() {
    const genres = getGenre();
    this.setState({ genres });
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;
    const movie = getMovie(movieId);
    if (!movie) this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(movie) });
  }

  doSubmit = () => {
    addMovie(this.state.account);
    this.props.history.push('/movies')
  };

  mapToViewModel(movie) {
    console.log("111", movie)
    return {
      id: movie.id,
      title: movie.title,
      genre: movie.genres,
    };
  }


  render() {
    return (
      <div className="form-group">
        <h1>Movie Form</h1>
        <form onSubmit={this.doSubmit}>
          {this.renderInput('id', this.state.data.id)}
          {this.renderSelect('genres', this.state.genres, this.state.errors.genreId)}
          {this.renderInput('title', this.state.data.title)}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
