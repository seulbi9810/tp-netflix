import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.css'

const genreMap = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
  };

const MovieCard = ({movie}) => {
    const getGenreName = (id) => genreMap[id] || 'Unknown';
  return (
    <div 
        style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`+
        ")",
    }}
    className='movie-card'
    >
        <div className='overlay'>
            <h1 className='title'>{movie.title}</h1>
            {movie.genre_ids.map((id)=> (
                <Badge key={id} bg="danger">{getGenreName(id)}</Badge>
            ))}
            <div>평점 : {movie.vote_average}⭐</div>
            <div>인기도 : {movie.popularity}🔥</div>
            <div>{movie.adult?'over18 : 🔞':'under18 : 🚫'}</div>
        </div>
      
    </div>
  )
}

export default MovieCard
