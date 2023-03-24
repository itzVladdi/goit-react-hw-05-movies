import { Link, useLocation } from 'react-router-dom';

export function MoviesListItem({ dataMovies }) {
  const location = useLocation();
  return dataMovies.map(movie => {
    return (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
          {movie.title}
        </Link>
      </li>
    );
  });
}
