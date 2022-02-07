import {
  useParams,
  useLocation,
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";

import { useState, useEffect } from "react";
import * as moviesTrendAPI from "../services/api";
// import Cast from './CastSubView'

export default function MoviesDetailsView() {
  const { id } = useParams();
  const [fromPage, setFromPage] = useState(null);
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(params);
  useEffect(() => {
    setFromPage(location.state?.from || "/");
    moviesTrendAPI.fetchOneMovies(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  console.log(movie);

  const handleClick = () => {
    navigate(fromPage);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go back
      </button>

      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>
            User Score: <span>{movie.vote_average}</span>
          </p>
          <p>
            Overview <span>{movie.overview}</span>
          </p>
          <p>
            Genres{" "}
            <span>{movie.genres.map((genre) => genre.name).join(" ")}</span>
          </p>
        </>
      )}
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>

        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
