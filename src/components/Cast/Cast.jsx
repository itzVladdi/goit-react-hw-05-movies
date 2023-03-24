import { ImgPlaceHolder } from 'components/ImgPlaceHolder/ImgPlaceHolder';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movieAPI';
import {
  ActorName,
  CastList,
  CastListItem,
  CharacterName,
  PhotoWrapper,
} from './Cast.styled';

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
        <CastList>
          {castData.map(actor => {
            return (
              <CastListItem key={actor.id}>
                {actor.profile_path?.length > 0 ? (
                  <PhotoWrapper>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                      alt=""
                    />
                  </PhotoWrapper>
                ) : (
                  <PhotoWrapper>
                    <ImgPlaceHolder />
                  </PhotoWrapper>
                )}
                <ActorName>{actor.name}</ActorName>
                <span>Character</span>
                <CharacterName>{actor.character}</CharacterName>
              </CastListItem>
            );
          })}
        </CastList>
      ) : (
        <div>
          <p>We don't have any cast information.</p>
        </div>
      )}
    </>
  );
}
