import MoviesInput from "../Component/MoviesInput/MoviesInput";
import { useEffect, useState } from "react";
import * as searchMovie from "../services/api";
import { Link, Outlet } from "react-router-dom";

export default function MoviesView() {
  const [nameMovie, setNameMovie] = useState("");
  const [movies, setMovies] = useState("");

  const submitName = (movie) => {
    setNameMovie(movie);
  };
  useEffect(() => {
    searchMovie.fetchsearchMovies(nameMovie).then(setMovies);
  }, [nameMovie]);

  return (
    <>
      <Outlet />
      <MoviesInput submitName={submitName} />

      {movies &&
        movies.results.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.name ? movie.name : movie.title}
            </Link>
          </li>
        ))}
    </>
  );
}
