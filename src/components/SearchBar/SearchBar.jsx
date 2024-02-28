import { useEffect, useState } from 'react';
import './SearchBar.css';
import { useSearchParams } from 'react-router-dom';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const oldQuery = searchParams.get('query');
    if (oldQuery) {
      setQuery(oldQuery);
    }
  }, [searchParams]);

  function handleSubmit(event) {
    event.preventDefault();
    if (query) {
      onSubmit(query);
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={ev => setQuery(ev.target.value)}
      />
      <button>&#128269;</button>
    </form>
  );
}

export default SearchBar;
