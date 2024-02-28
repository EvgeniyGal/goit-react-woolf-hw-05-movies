import Cast from 'components/Cast/Cast';
import useFetchMovieData from 'components/Hooks/useFetchMovieData';
import { getCastData } from 'servicies/tmdb-api';

function CastPage() {
  const castData = useFetchMovieData(getCastData);

  return castData && <Cast castData={castData} />;
}

export default CastPage;
