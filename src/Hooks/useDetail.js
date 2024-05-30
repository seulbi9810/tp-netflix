import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchDetailMovies=()=>{
  return api.get(`/movie/{movie_id}`)
}

export const useDetailQuery = (movie_id) => {
  return useQuery({
    queryKey:['movie-detail',movie_id],
    queryFn:fetchDetailMovies(movie_id),
    select:(result)=>result.data
  })
}

