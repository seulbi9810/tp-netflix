import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useKeywordQuery } from '../../Hooks/useKeyword';
import { ClockLoader } from 'react-spinners';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import GenreFilter from '../../components/GenreFilter'; // 경로 수정
import { useDispatch,useSelector } from 'react-redux'; // Redux 상태를 가져오기 위해 추가
import { setGenreFilter } from '../../redux/action';



const Movies = () => {
  const[query, setQuery]=useSearchParams()
  const keyword = query.get("q")
  const [page, setPage]=useState(1)

  const selectedGenre = useSelector(state => state.filter); // Redux 상태에서 필터 가져오기

  const dispatch = useDispatch();

  const{data, isLoading, isError,error}= useKeywordQuery({keyword,page})
  console.log("ddd",data)

  const handlePageClick=({selected})=>{
    setPage(selected+1)
  }

  useEffect(() => {
    // 필터가 변경될 때마다 페이지를 첫 페이지로 초기화합니다.
    setPage(1);
  }, [selectedGenre]);

  if(isLoading){
    return <div><ClockLoader/></div>
  }
  if(isError){
    return <Alert variant='danger'>{error.message}</Alert>
  }
  if (!data || !data.results || data.results.length === 0) {
    return <div>No data available</div>;
}
// 장르 필터링 로직
const filteredResults = selectedGenre
? data.results.filter(movie => movie.genre_ids.includes(parseInt(selectedGenre)))
: data.results;

const genres = [
{ id: 12, name: 'Adventure' },
{ id: 28, name: 'Action' },
{ id: 16, name: 'Animation' },
{ id: 35, name: 'Comedy' },
{ id: 80, name: 'Crime' },
{ id: 99, name: 'Documentary' },
{ id: 18, name: 'Drama' },
{ id: 10751, name: 'Family' },
{ id: 14, name: 'Fantasy' },
{ id: 36, name: 'History' },
{ id: 27, name: 'Horror' },
{ id: 10402, name: 'Music' },
{ id: 9648, name: 'Mystery' },
{ id: 10749, name: 'Romance' },
{ id: 878, name: 'Science Fiction' },
{ id: 10770, name: 'TV Movie' },
{ id: 53, name: 'Thriller' },
{ id: 10752, name: 'War' },
{ id: 37, name: 'Western' },
];

const handleGenreFilter = (genreId) => {
  dispatch(setGenreFilter(genreId));
};

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <GenreFilter genres={genres} />
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {filteredResults.map((movie, index) => (
             <Col key={index} lg={4} xs={12}>
              <MovieCard movie={movie}/>
             </Col>
          ))}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages}//전체 페이지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Movies