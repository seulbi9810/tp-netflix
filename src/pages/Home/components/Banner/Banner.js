import React from 'react'
import { usePopularMoviesQuery } from '../../../../Hooks/usePopularmovies'

const Banner = () => {
    const {data} = usePopularMoviesQuery()
    console.log('ddd',data)
  return (
    <div>
      banner
    </div>
  )
    
  
}

export default Banner
