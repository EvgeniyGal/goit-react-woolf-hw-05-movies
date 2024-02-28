import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

function Movies({ moviesData, onSubmit, query }) {
  return (
    <main>
      <SearchBar onSubmit={onSubmit} />
      {moviesData && (
        <MovieList
          movies={moviesData.results}
          to="/movies"
          from={`/movies?query=${query}`}
        />
      )}
    </main>
  );
}

export default Movies;
