const BASE_URL = "https://api.themoviedb.org";
const KEY = "1ada30393723f3c42c0e335990e40aea";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchMovies(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/trending/all/day?api_key=${KEY}&/id=${id}`
  );
}

export function fetchOneMovies(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${id}?api_key=${KEY}&language=en-US`
  );
}

export function fetchCast(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchReviews(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}

export function fetchsearchMovies(movies) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/search/movie?api_key=${KEY}&language=en-US&query=${movies}&page=1&include_adult=false
    `
  );
}
