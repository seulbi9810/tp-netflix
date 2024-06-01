import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchReviews = ({movieId}) => {
    return api.get(`/movie/${movieId}/reviews`)
}

export const useMovieReviewsQuery = (movieId) => {
    return useQuery({
        queryKey : ['movie-reviews', movieId],
        queryFn : () => fetchReviews({movieId}),
        select : (result) => result.data,
        enabled : !!movieId, 
    })
}