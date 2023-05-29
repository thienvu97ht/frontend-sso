import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Header.scss";
import { NavLink } from "react-router-dom";

// rafce
const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>

          <Nav>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
