import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetails = ({ movieId }) => {
    return api.get(`/movie/${movieId}`)
}

export const useMovieDetailsQuery = (movieId) => {
    return useQuery({
        queryKey: ['movie-details', movieId],
        queryFn: () => fetchMovieDetails({ movieId }),
        select: (result) => result.data,
        enabled: !!movieId,  // movieId가 있을 때만 쿼리를 실행
    })
}