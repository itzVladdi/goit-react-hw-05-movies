import { MovieList } from 'components/MoviesList/MoviesList';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/movieAPI';
import { Button, Input, StyledForm } from './Movie.styled';
export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [resultData, setResultData] = useState([]);
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      setResultData(null);
      return;
    }
    async function fetchMovieByQuery() {
      try {
        const { results } = await getMovieByQuery(searchQuery);
        setResultData(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieByQuery();
  }, [searchQuery]);

  function handleSubmit(event) {
    event.preventDefault();
    const params = query !== '' ? { query } : {};
    setSearchParams(params);
  }
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={event => setQuery(event.target.value)}
        />
        <Button type="submit"> Search </Button>
      </StyledForm>
      {resultData?.length > 0 && (
        <div>
          <MovieList dataMovies={resultData} />
        </div>
      )}
      {resultData?.length === 0 && (
        <div>
          <p>No matches.</p>
        </div>
      )}
    </Container>
  );
}
