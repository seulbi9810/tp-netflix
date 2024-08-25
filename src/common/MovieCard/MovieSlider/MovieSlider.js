import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard';

const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div>
        <h1><strong>{title}</strong></h1>
        <Carousel
            responsive={responsive}
            infinite={true}
            centerMode={true}
            containerClass="carousel-container"
            itemClass="movie-slider p-1"
            >
            
            {movies.map((movie, index)=>(
            <MovieCard movie={movie} key={index}/>))}
        </Carousel>
    </div>
  )
}

export default MovieSlider