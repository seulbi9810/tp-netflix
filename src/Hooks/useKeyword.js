import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchKeyword = ({ keyword,page }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}`)
    : api.get(`/movie/popular?page=${page}`)
 
}

export const useKeywordQuery = ({ keyword,page}) => {
  return useQuery({
    queryKey: ['movie-search', { keyword,page}],
    queryFn: () => fetchKeyword({ keyword,page }),
    select: (result) => result.data
  });
}