import './Home.css';
import MovieList from 'components/MovieList/MovieList';

function Home({ movies }) {
  return (
    <main>
      <h1 className="main-title">Trending today</h1>
      <MovieList movies={movies} to="/movies" from="/" />
    </main>
  );
}

export default Home;
