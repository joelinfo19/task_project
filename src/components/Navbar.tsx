import React from "react";
import CourseSelector from './CourseSelector';
import {Navbar, Nav, Container, NavDropdown, Image} from 'react-bootstrap';


export const NavbarComponent=()=>{
    return(
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className='me-3'>
          <Image src='../../public/logo192.png' roundedCircle={true}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown style={{fontSize: "1.5rem"}} title="Cursos" id="basic-nav-dropdown">
                <CourseSelector/>
            </NavDropdown>
          </Nav>
          <Nav>
            <Image src='../../public/favicon.ico' roundedCircle/>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    )



}
