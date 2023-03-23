import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';

export function MovieList({ dataMovies }) {
  return (
    <div>
      <ul>
        <MoviesListItem dataMovies={dataMovies} />
      </ul>
    </div>
  );
}
