import React from 'react'
import { usePopularMoviesQuery } from '../../../../Hooks/usePopularmovies'
import {ClockLoader} from 'react-spinners'
import Alert from 'react-bootstrap/Alert';
import 'react-multi-carousel/lib/styles.css';
import './PopularMovieSlide.css'
import MovieSlider from '../../../../common/MovieCard/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const PopularMovieSlide = () => {

    const {data, isLoading, isError, error}= usePopularMoviesQuery()

    if(isLoading){
        return <div><ClockLoader/></div>
      }
      if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
      }
      if (!data || !data.results || data.results.length === 0) {
        return <div>No data available</div>;
    }
    return (
        <div className='popular'>
          <MovieSlider 
            title='Popular Movies' 
            movies={data.results} 
            responsive={responsive}/>
        </div>
    )
}

export default PopularMovieSlide
