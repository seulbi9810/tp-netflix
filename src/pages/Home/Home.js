import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies'
import TopRated from './components/TopRated/TopRated'

const Home = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
      <UpcomingMovies/>
      <TopRated/>
    </div>
  )
}

export default Home