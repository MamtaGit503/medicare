import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="headerMain">
      <Navbar.Brand>
      <Link className="" to="/"><img src="Assets/Images/MediCare.png" alt="img" /></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="menuBars">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link headerLInk" to="/">Mamta</Link>
          <Link className="nav-link headerLInk" to="/about">About</Link>
          <Link className="nav-link headerLInk" to="/service">Services</Link>
          <Link className="nav-link headerLInk" to="/news">News</Link>
        </Nav>
        <Link to="/contact"><Button variant="primary">Contact</Button></Link>
      </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
