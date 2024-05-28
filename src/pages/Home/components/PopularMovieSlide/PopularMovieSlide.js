import React from 'react'
import { usePopularMoviesQuery } from '../../../../Hooks/usePopularmovies'
import {ClockLoader} from 'react-spinners'
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
            <h3>Popular Movies</h3>
            <Carousel
                responsive={responsive}
                infinite={true}
                centerMode={true}
                containerClass="carousel-container"
                itemClass="movie-slider p-1"
                >
                
                {data.results.map((movie, index)=>(
                <MovieCard movie={movie} key={index}/>))}
            </Carousel>

        </div>
    )
}

export default PopularMovieSlide
