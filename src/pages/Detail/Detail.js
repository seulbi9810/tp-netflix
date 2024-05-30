import React from 'react';
import { useDetailQuery } from '../../Hooks/useDetail';
import { ClockLoader } from 'react-spinners';
import Alert from 'react-bootstrap/Alert';
import MovieCard from '../../common/MovieCard/MovieCard'; // MovieCard 컴포넌트를 import 합니다.
import { responsive } from '../../constants/responsive';

const Detail = ({ movie_id }) => { // movie_id를 props로 전달 받습니다.
  const { data, isLoading, isError, error } = useDetailQuery(movie_id); // useDetailQuery 훅을 호출할 때 movie_id를 전달합니다.
  console.log('eee', data);

  if (isLoading) {
    return <div><ClockLoader /></div>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Detail Movie</h1>
      {data.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Detail;