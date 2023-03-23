import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movieAPI';

export function Cast() {
  const [castData, setCastData] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchCastData() {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCastData(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCastData();
  }, [movieId]);
  return (
    <>
      {castData.length > 0 ? (
        <ul>
          {castData.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt=""
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>We don't have any cast information.</p>
        </div>
      )}
    </>
  );
}
