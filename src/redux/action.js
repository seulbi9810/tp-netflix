
export const SET_GENRE_FILTER = 'SET_GENRE_FILTER';

export const setGenreFilter = (genreId) => ({
  type: SET_GENRE_FILTER,
  payload: genreId,
});