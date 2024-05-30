import React from 'react';
import { useDispatch } from 'react-redux';
import { setGenreFilter } from '../redux/action'; // 경로 수정
import { Button } from 'react-bootstrap';

const GenreFilter = ({ genres }) => {
  const dispatch = useDispatch();


  const handleGenreFilter = (genreId) => {
    dispatch(setGenreFilter(genreId));
  };
  return (
    <div className="genre-buttons">
    <Button className="btn-lg" variant="outline-warning" onClick={() => handleGenreFilter(null)}>All</Button>
    {genres.map(genre => (
      <Button key={genre.id} className="btn-lg" variant="outline-warning" onClick={() => handleGenreFilter(genre.id)}>
        {genre.name}
      </Button>
    ))}
  </div>
  );
};

export default GenreFilter;