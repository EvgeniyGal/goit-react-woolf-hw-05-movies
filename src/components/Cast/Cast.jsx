import avatar from '../../assets/avatar.jpg';
import './Cast.css';

function Cast({ castData }) {
  return (
    <ul className="cast-container">
      {castData.cast.map(person => (
        <li key={person.id}>
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                : avatar
            }
            alt={person.name}
          />
          <div>
            <p> {person.name}</p>
            <p> {`Character: ${person.character}`}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
