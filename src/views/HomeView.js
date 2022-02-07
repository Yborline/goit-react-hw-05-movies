import { format } from "prettier";
import TrendingToday from "../Component/TrendingToday/TrendingToday";
import * as moviesTrendAPI from "../services/api";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Homeview() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesTrendAPI.fetchMovies().then(setMovies);
  }, []);

  return (
    <>
      <Outlet />
      <TrendingToday text="Trending Today" />

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
