import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import NetflixLogo from '../img/Netflix.png';
import './AppLayout.css';  // 추가: CSS 파일을 import


const AppLayout = () => {

  const [keyword, setKeyword]= useState("")
  const navigate= useNavigate()
  
  const searchByKeyword=(event)=>{
    event.preventDefault()
    //url 바꿔주기
    navigate(`/movies?q=${keyword}`)
    //검색 후 초기화
    setKeyword("");
  }

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="app-layout">
      <Navbar expand="lg" className="bg-body-tertiary" style={{ margin:0 , padding: 0, background: 'black', width: '100%' }}  > 
      <Container fluid style={{background:'black', color:'white'}}>
        <Navbar.Brand onClick={() => handleNavigate('/')}><img src={NetflixLogo} alt='netflix' style={{width:'200px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', background:'black', color:'white'}}
            navbarScroll
          >
            <Link className='layout' to="/" style={{color:'white', textDecoration:'none'}} >Home</Link>
            <Link className='layout' to="/movies" style={{color:'white', textDecoration:'none'}}>Movie</Link>
          
          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
          <Form.Control
              style={{ background: 'white', color: 'black', marginRight:'1rem' }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(event)=>setKeyword(event.target.value)}
            />
            <Button type='button'  onClick={() => handleNavigate('/movies')} variant="outline-success"  style={{background: 'red', marginRight:'1rem', border:'none', ':hover': { background: 'darkblack'}}}>Search</Button>
            <Button type='button' onClick={() => handleNavigate('/login')} variant="outline-success"  style={{background: 'red', marginRight:'1rem', border:'none', ':hover': { background: 'darkblack'}}}>Login</Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
  </div>
  )
}

export default AppLayout


