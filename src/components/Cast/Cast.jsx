import avatar from '../../assets/avatar.jpg';
import './Cast.css';

function Cast({ castData }) {
  if (!castData) {
    return <li className="no-data">There isn't any cast data.</li>;
  }

  return (
    <ul className="cast-container">
      {castData.cast.map(person => (
        <li key={person.id}>
          <img src={composePath(person.profile_path)} alt={person.name} />
          <div>
            <p> {person.name}</p>
            <p> {`Character: ${person.character}`}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function composePath(path) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : avatar;
}

export default Cast;
