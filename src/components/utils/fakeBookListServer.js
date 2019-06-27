const movieInfo = [
  { id: 1, title: "War and Peace", genre:"Love", liked: false },
  { id: 2, title: "White Whale", genre:"Action", liked: false },
  { id: 3, title: "Gone with the wind", genre:"Love", liked: false },
  { id: 4, title: "The Red and the Black", genre:"Love", liked: false },
  { id: 5, title: "Big Bang", genre:"Thriller", liked: false },
  { id: 6, title: "Notre-Dame", genre:"Love", liked: false },
  { id: 7, title: "The Great Gatsby", genre:"Love", liked: false },
  { id: 8, title: "The Adventures of Tom Sawyer", genre:"Action", liked: false },
  { id: 9, title: "The Red and The Black", genre:"Love", liked: false }
];

export function getBookList(){
  return movieInfo;
}

export function getMovie(movieId){
  movieId = Number(movieId);
  const movie = movieInfo.find(movie=>movie.id===movieId);
  return movie;
}

export function addMovie(newMovie){
  
  const newMovieId = Number(newMovie.id);
  let movie = movieInfo.find(movie=>movie.id===newMovieId);
  if(movie){
    movie.id = newMovie.id;
    movie.title = newMovie.title;
    movie.genre = newMovie.genres;
  }
  if(!movie) movieInfo.push(newMovie)
  return movie
}

