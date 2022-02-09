import { Link, useLocation } from "react-router-dom";

export default function ListMovies({ movies }) {
  const location = useLocation();
  const backLink = location.pathname + location.search;

  return (
    <ul>
      {movies &&
        movies.results.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: backLink }}>
              {movie.name ? movie.name : movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
