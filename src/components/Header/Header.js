import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { doLogOut } from "../../redux/action/accountAction";
import logoSvg from "../../logo.svg";

// rafce
const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.account.userInfo);

  const handleLogin = () => {
    // redirect to SSO
    window.location.href = `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_CURRENT_PROJECT_URL}`;
  };

  const handleLogout = () => {
    dispatch(doLogOut());
  };

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img
            src={logoSvg}
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Hỏi dân IT SSO
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/weather" className="nav-link">
              Weather
            </NavLink>
          </Nav>

          {user && user.access_token && (
            <Nav>
              <Nav.Link href="#">Welcome {user.username}</Nav.Link>
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
