import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'a6d839c58e4d58b9148160e6ece08471',
};
export async function getTrendingMovies() {
  const { data } = await axios.get('trending/movie/day');
  return data;
}
export async function getMovieDetails(movieID) {
  const { data } = await axios.get(`/movie/${movieID}`);
  return data;
}
export async function getMovieCredits(movieID) {
  const { data } = await axios.get(`/movie/${movieID}/credits`);
  return data;
}
export async function getMovieReviews(movieID) {
  const { data } = await axios.get(`/movie/${movieID}/reviews`);
  return data;
}
export async function getMovieByQuery(query) {
  const { data } = await axios.get('/search/movie', {
    params: { query },
  });
  return data;
}
