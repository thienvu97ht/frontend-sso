import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";

// rafce
const Header = () => {
  const user = useSelector((state) => state.account.userInfo);

  const handleLogin = () => {
    // redirect to SSO
    window.location.href = `${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_UTL}`;
  };

  const handleLogout = () => {};

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
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

          {user && user.access_token && (
            <Nav>
              <Nav.Link href="#">Welcome {user.email}</Nav.Link>
            </Nav>
          )}

          <Nav>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              {user && user.access_token ? (
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item onClick={handleLogin}>Login</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
