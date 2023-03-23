import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieAPI';

export function Reviews() {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviewsList(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieReviews();
  }, [movieId]);
  return (
    <>
      {reviewsList.length > 0 ? (
        <ul>
          {reviewsList.map(comment => {
            return (
              <li key={comment.id}>
                <p>Author: {comment.author}</p>
                <p>{comment.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this momen.</p>
      )}
    </>
  );
}
