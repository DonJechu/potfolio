import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";



function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 50) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{ height: "130px" }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto justify-content-center" defaultActiveKey="#home">
    <Nav.Item>
      <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
        <span className="nav-link-text">
          Home
        </span>
      </Nav.Link>
    </Nav.Item>


    <Nav.Item>
      <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
        <span className="nav-link-text">
          3D Modeling
        </span>
      </Nav.Link>
    </Nav.Item>
  </Nav>


{/*  <Nav>
    <Nav.Item className="ml-auto">
      <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
        <button 
          className="btn"
          style={{
            marginRight: "-50px",
            background: "linear-gradient(to right, #16DAD7, #47C2DB)",
            boxShadow: "0 10px 14px rgba(0, 0, 0, 0.1)",
            color: "white",
            fontSize: "1.2em",
            fontWeight: "900",
            padding: "8px 40px",
            borderRadius: "14px",
          }}
        >
          Contact
                </button>
              </Nav.Link>
            </Nav.Item>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
}


export default NavBar;
