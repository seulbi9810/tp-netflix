import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchKeyword= ()=>{
    return api.get(`/search/keyword`);
}

export const useKeywordQuery=()=>{
    return useQuery({
        queryKey:['search-keyword'],
        queryFn:fetchKeyword,
        select:(result)=>result.data
    })
}