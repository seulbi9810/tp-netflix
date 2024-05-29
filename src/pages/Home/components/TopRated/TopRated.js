import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../Hooks/useTopRated'
import Alert from 'react-bootstrap/Alert';
import { ClockLoader } from 'react-spinners';
import MovieSlider from '../../../../common/MovieCard/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';



const TopRated = () => {

    const{ data, isLoading, isError, error }=useTopRatedMoviesQuery()

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
          title='Top Rated Movies'
          movies={data.results}
          responsive={responsive}
        />
      </div>
    )
}

export default TopRated