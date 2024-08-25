import React from 'react';
import { ClockLoader } from 'react-spinners';
import { useUpcomingMoviesQuery } from '../../../../Hooks/useUpcomingmovies';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieCard/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import '../PopularMovieSlide/PopularMovieSlide.css';

const UpcomingMovies = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return <div><ClockLoader /></div>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  if (!data || !data.results || data.results.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <div className='popular'>
      <MovieSlider
        title='Upcoming Movies'
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovies;