import TrendingToday from "../Component/TrendingToday/TrendingToday";
import * as moviesTrendAPI from "../services/api";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ListMovies from "../Component/ListMovies/ListMovies";

export default function Homeview() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesTrendAPI
      .fetchMovies()
      .then(setMovies)
      .catch((er) => {
        alert(`${er}`);
      });
  }, []);

  return (
    <>
      <Outlet />
      <TrendingToday text="Trending Today" />

      {movies && <ListMovies movies={movies} />}
    </>
  );
}
