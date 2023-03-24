import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MoviesList/MoviesList';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useState } from 'react';
import { useEffect } from 'react';

import { getTrendingMovies } from '../services/movieAPI';

export function Home() {
  const [dataMovies, setDataMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        setDataMovies(results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <Container>
      <h2>Trending today</h2>
      {isLoading && <Loader isLoading={isLoading} />}
      <MovieList dataMovies={dataMovies} />
    </Container>
  );
}
