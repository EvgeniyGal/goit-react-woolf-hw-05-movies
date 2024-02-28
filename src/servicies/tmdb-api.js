import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjk1MDgyNGQzMjQ5MmMxNWY3MjVmNjM2YTBjNzdjYyIsInN1YiI6IjY1NThjNDRiZDRmZTA0MDBmZTA3OGZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.89DjyE5GAgmUPNptydVZERysDvfy4paMoXwqbuqXVPY';
axios.defaults.headers.common['accept'] = 'application/json';

export async function getTodayTrends(page = 1) {
  const params = new URLSearchParams({
    page,
  });
  const response = await axios.get(`/trending/movie/day?${params}`);
  return response.data;
}

export async function getMovieById(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

export async function getCastData(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
}

export async function getReviewsData(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
}

export async function getMoviesByQuery(query, page = 1) {
  const params = new URLSearchParams({
    page,
    query,
  });
  const response = await axios.get(`/search/movie?${params}`);
  return response.data;
}
