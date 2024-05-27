import {axios} from 'axios'

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept : "application/json",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGNlODVhOTIzODUxZTI5OWM4NWMxMmUwYWJmODgzMCIsInN1YiI6IjY2NTNkMGQwODUxYzI0OTNmNzAzY2VkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cl5QgT-Q658HZHV8Lec-uy55QUDX-JWbkWlGng6JaB4'"
    }
  });

export default api