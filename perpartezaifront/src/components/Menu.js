import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./Logo.js";
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Home from '../pages/Home.js';
import About from '../pages/Aboutus.js';
import Register from '../pages/Register.js';
import Login from '../pages/Login.js';

function Menu() {
  return (
  <Router>
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="./pages/Home"><Logo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link href="./pages/Home">Domů</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link href="./pages/Aboutus">O nás</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Přihlásit se" id="basic-nav-dropdown">
              <LinkContainer to="/register">
              <NavDropdown.Item href="./pages/Register.js">Registrovat se</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/login">
              <NavDropdown.Item href="./pages/Login.js">
                Přihlásit se
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   </div>
  </Router>
  );
}

export default Menu;