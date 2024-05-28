import React from 'react'
import { usePopularMoviesQuery } from '../../../../Hooks/usePopularmovies'
import {ClockLoader} from 'react-spinners'
import Alert from 'react-bootstrap/Alert';
import './Banner.css'

const Banner = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery()
    console.log('ddd', data)
   
      if(isLoading){
        return <div><ClockLoader/></div>
      }
      if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
      }
      if (!data || !data.results || data.results.length === 0) {
        return <div>No data available</div>;
    }

      const bannerMovie = data.results[0];
      const posterUrl = bannerMovie.poster_path 
        ? `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${bannerMovie.poster_path}`
        : '';

      return(
        <div className='banner'
        style={{
        backgroundImage:
        `url(${posterUrl})`,
        height:'56vh',
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
        >
          <div className='banner-text-area'>
            <h1>{data.results[0].title}</h1>
            <p>{data.results[0].overview}</p>
          </div>
        </div>
      )
}
export default Banner