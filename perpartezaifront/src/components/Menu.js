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
            <Nav.Link href="/home">Domů</Nav.Link>
            <Nav.Link href="/aboutus">O nás</Nav.Link>
            <NavDropdown title="Přihlásit se" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">Registrovat se</NavDropdown.Item>
              <NavDropdown.Item href="/login">
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