import React from 'react'
import { useParams } from 'react-router-dom'
import { useMovieReviewsQuery } from '../../Hooks/useReviews'
import { ClockLoader } from 'react-spinners'
import { Alert } from 'react-bootstrap'
import './Reviews.css'

const Reviews = () => {
  const {id} = useParams()
  const {data, isLoading, isError, error} = useMovieReviewsQuery(id)
  
  if (isLoading) {
    return <div><ClockLoader /></div>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className='review'>
      <h1>Reviews</h1>
      <div className='review-box'>
      {data.results.map(review => (
          <div key={review.id}>
            <h4><strong>{review.author}</strong></h4>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
