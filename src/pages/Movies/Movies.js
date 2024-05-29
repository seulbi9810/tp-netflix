import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useKeywordQuery } from '../../Hooks/useKeyword'
import { ClockLoader } from 'react-spinners'
import { Alert, Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';


//경로 2가지
//nav바에서 클릭해서 온경우 => popularMovie 보여주기
//keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여주기

//페이지네이션 만들기
//page state 만들기
//페이지네이션 클릭할때마다 page바꿔주기
//page 값이 바뀔때마다useKeywordQuery에 page까지 넣어서 fetch

const Movies = () => {
  const[query, setQuery]=useSearchParams()
  const keyword = query.get("q")
  const [page, setPage]=useState(1)

  const{data, isLoading, isError,error}= useKeywordQuery({keyword,page})
  console.log("ddd",data)

  const handlePageClick=({selected})=>{
    setPage(selected+1)
  }

  if(isLoading){
    return <div><ClockLoader/></div>
  }
  if(isError){
    return <Alert variant='danger'>{error.message}</Alert>
  }
  if (!data || !data.results || data.results.length === 0) {
    return <div>No data available</div>;
}
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          {""}
          필터{""}
          </Col>
        <Col lg={8} xs={12}>
          <Row>
          {data?.results.map((movie, index)=>(
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