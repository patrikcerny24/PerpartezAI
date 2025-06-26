import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./Logo.js";
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="/"><Logo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className="menu">Domů</Nav.Link>
            <Nav.Link href="/aboutus" className="menu">O nás</Nav.Link>
            <NavDropdown   title={
    <span style={{ color: '#038B6B', fontSize: '1.1rem' }}>
      Přihlásit se
    </span>
  }>
              <NavDropdown.Item href="/register"className="menu">Registrovat se</NavDropdown.Item>
              <NavDropdown.Item href="/login"className="menu">
                Přihlásit se
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
}

export default Menu;