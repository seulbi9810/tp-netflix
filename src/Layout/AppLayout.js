import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import NetflixLogo from '../img/Netflix.png';
import './AppLayout.css';  // 추가: CSS 파일을 import


const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navbar expand="lg" className="bg-body-tertiary" style={{ margin: 0, padding: 0, background: 'black', width: '100%' }}  > 
      <Container fluid style={{background:'black', color:'white'}}>
        <Navbar.Brand href="#"><img src={NetflixLogo} alt='netflix' style={{width:'200px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', background:'black', color:'white'}}
            navbarScroll
          >
            <Nav.Link href="../pages/Home/Home" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="../pages/Movies/Movies" style={{color:'white'}}>Movie</Nav.Link>
          
          </Nav>
          <Form className="d-flex">
          <Form.Control
              style={{ background: 'black', color: 'white' }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{background: 'red', border:'none', ':hover': { background: 'darkblack'}}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
  </div>
  )
}

export default AppLayout


