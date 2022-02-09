import MoviesInput from "../Component/MoviesInput/MoviesInput";
import { useEffect, useState } from "react";
import * as searchMovie from "../services/api";
import { Outlet, useSearchParams } from "react-router-dom";
import ListMovies from "../Component/ListMovies/ListMovies";

export default function MoviesView() {
  const [nameMovie, setNameMovie] = useState("");
  const [movies, setMovies] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const submitName = (movie) => {
    setNameMovie(movie);
    setSearchParams({ movie });
  };

  const searchQuery = searchParams.get("movie");
  useEffect(() => {
    if (searchQuery) {
      searchMovie
        .fetchsearchMovies(searchQuery)
        .then(setMovies)
        .catch((er) => {
          alert(er);
        });
    }
  }, [nameMovie]);

  return (
    <>
      <Outlet />
      <MoviesInput submitName={submitName} />
      {movies && <ListMovies movies={movies} />}
    </>
  );
}
