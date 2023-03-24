import { ImgPlaceHolder } from 'components/ImgPlaceHolder/ImgPlaceHolder';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movieAPI';
import {
  AddInfoNavLink,
  AddInfoWrapper,
  AdditionalList,
  GoBackLink,
  ImgWrapper,
  InfoWrapper,
  MovieWrapper,
} from './MovieDetalis.styled';

export function MovieDetalis() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movieData, setMovieData] = useState(null);
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
  if (!movieData) return;
  const { title, overview, genres, poster_path, vote_average } = movieData;
  return (
    <div>
      <MovieWrapper>
        <GoBackLink to={backLinkHref}>&#129044;{` Go back`}</GoBackLink>
        {poster_path?.length > 0 ? (
          <ImgWrapper>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
          </ImgWrapper>
        ) : (
          <ImgWrapper>
            <ImgPlaceHolder />
          </ImgWrapper>
        )}

        <InfoWrapper>
          <h2>{title}</h2>
          <h3>User Score: {(vote_average * 10).toFixed(1)}%</h3>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(genre => genre.name).join(' ')}</p>
        </InfoWrapper>
      </MovieWrapper>
      <AddInfoWrapper>
        <h3>Additional information</h3>
        <AdditionalList>
          <li>
            <AddInfoNavLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </AddInfoNavLink>
          </li>
          <li>
            <AddInfoNavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </AddInfoNavLink>
          </li>
        </AdditionalList>
      </AddInfoWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
