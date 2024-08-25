import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import NetflixLogo from '../img/Netflix.png';
import './AppLayout.css';


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
      <Navbar expand="lg" className="navbar-custom" > 
      <Container fluid style={{background:'black', color:'white'}}>
        <Navbar.Brand onClick={() => handleNavigate('/')}><img src={NetflixLogo} alt='netflix' style={{width:'200px', cursor:'pointer'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Link className='layout' to="/" >Home</Link>
            <Link className='layout' to="/movies">Movie</Link>
          
          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
          <Form.Control
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


