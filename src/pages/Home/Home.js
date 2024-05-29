import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies'
import TopRated from './components/TopRated/TopRated'



//1. 배너 = popular movie를 들고와서 첫번째 아이템에 보여주기
//2. popular movie
//3. top rated movie
//4. upcoming movie
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