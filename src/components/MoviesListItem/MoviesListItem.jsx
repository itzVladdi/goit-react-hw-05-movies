import { Link } from 'react-router-dom';

export function MoviesListItem({ dataMovies }) {
  return dataMovies.map(movie => {
    return (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </li>
    );
  });
}
