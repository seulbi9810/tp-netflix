import React from "react";
import { ClockLoader } from "react-spinners";
import Alert from "react-bootstrap/Alert";
import { Link, useParams } from "react-router-dom";
import { useMovieDetailsQuery } from "../../Hooks/useDetail";
import "./Detail.css";
import { Button } from "react-bootstrap";

const Detail = () => {
  const { id } = useParams(); // URL에서 영화 ID를 가져옴
  const { data, isLoading, isError, error } = useMovieDetailsQuery(id); // useMovieDetailsQuery 훅을 호출할 때 movie_id를 전달합니다.

  if (isLoading) {
    return (
      <div>
        <ClockLoader />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="detail">
      <div className="detail-box">
        <h1>
          <strong>Detail Movie</strong>
        </h1>
        <div className="detail-content">
          <div className="detail-image">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <div className="detail-info">
            <h2>{data.title}</h2>
            <h4>{data.overview}</h4>
            <h5>개봉일: {data.release_date}</h5>
            <p>평점: {data.vote_average}⭐</p>
            <div className="detail-links">
              <Button
                variant="danger"
                as={Link}
                to={`/movies/${id}/reviews`}
                className="detail-button"
              >
                리뷰 보기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
