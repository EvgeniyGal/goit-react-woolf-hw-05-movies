import Home from 'components/Home/Home';
import { useEffect, useState } from 'react';
import { getTodayTrends } from 'servicies/tmdb-api';

function HomePage() {
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      try {
        setMoviesData(await getTodayTrends());
      } catch (error) {
        setMoviesData(null);
      }
    })();
  }, []);

  return moviesData && <Home movies={moviesData.results} />;
}

export default HomePage;
