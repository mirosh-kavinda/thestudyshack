import React from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
// import { Link, withRouter } from "react-router-dom";
import logo from './123.png';

const Navigation=({onRouteChange,isSignedIn})=>{
    
      return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand ><img width='140px'height='54px'alt='logo' src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
          <Nav className="mr-auto">
            <Nav.Link onClick={()=>onRouteChange('sum_courses')}><h6>Summer Courses</h6></Nav.Link>
            <Nav.Link onClick={()=>onRouteChange('tutoring')}><h6>Tutoring</h6></Nav.Link>
            <Nav.Link onClick={()=>onRouteChange('test_prep')}><h6>Test-Prep</h6></Nav.Link>
            <Nav.Link href="#home"><h6>Pricing</h6></Nav.Link>
            <Nav.Link onClick={()=>onRouteChange('about')}><h6>About Us</h6></Nav.Link>
            <Nav.Link onClick={()=>onRouteChange('blog')}><h6>Blog</h6></Nav.Link>
          </Nav>
          <Button variant="outline-dark" onClick={()=>onRouteChange('signin')}>Sign In</Button>
          <Button variant="outline-dark" onClick={()=>onRouteChange('register')}>Register</Button>
        </Navbar.Collapse>
       
      </Navbar>
        );
      
      
}

export default Navigation;


