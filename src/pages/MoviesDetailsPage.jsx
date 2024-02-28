import useFetchMovieData from 'components/Hooks/useFetchMovieData';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { getMovieById } from 'servicies/tmdb-api';

function MoviesDetailPage() {
  const movieData = useFetchMovieData(getMovieById);

  return movieData && <MovieDetails movie={movieData} />;
}

export default MoviesDetailPage;
