import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import poster from '../../assets/poster.jpg';
import './MovieDetails.css';

function MovieDetails({ movie }) {
  const location = useLocation();

  return (
    <main>
      <Link className="go-back-btn" to={location.state?.from ?? '/'}>
        &larr; Go back
      </Link>
      <div className="movie-details-container">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : poster
          }
          alt={movie.title}
        />
        <div className="movie-details-data">
          <h1>{movie.title}</h1>
          <p>
            <span>User score: </span>
            {movie.vote_average}
          </p>
          <p>
            <span>Overview: </span>
            {movie.overview}
          </p>
          <p>
            {' '}
            <span>Genres:</span>
            {movie.genres.reduce(
              (acc, genre) => (acc = `${acc} ${genre.name}`),
              ''
            )}
          </p>
        </div>
      </div>
      <div className="movie-add-info">
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="Cast" state={{ from: location.state?.from ?? '/' }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="Reviews" state={{ from: location.state?.from ?? '/' }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
}

export default MovieDetails;
