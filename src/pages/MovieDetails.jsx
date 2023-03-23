import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movieAPI';

export function MovieDetalis() {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieDetails(id) {
      try {
        const data = await getMovieDetails(id);
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);

  const { title, overview, genres, poster_path, vote_average } = movieData;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      <div>
        <h3>{title}</h3>
        <h3>User Score: {(vote_average * 10).toFixed(1)}%</h3>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.map(genre => genre.name).join(' ')}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
