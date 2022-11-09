import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="py-5"
      >
        <Container>
          <Link
            to="/"
            className="text-decoration-none fw-semibold text-white fs-5"
          >
            EUPHONIOUS WHIZ REVIEWS
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/home"
                className="text-decoration-none fw-semibold text-white mx-5"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="text-decoration-none fw-semibold text-white mx-5"
              >
                Blog
              </Link>
              <Link
                to="/services"
                className="text-decoration-none fw-semibold text-white mx-5"
              >
                Services
              </Link>
              <Link
                to="/login"
                className="text-decoration-none fw-semibold text-white mx-5"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-decoration-none fw-semibold text-white ms-5"
              >
                Signup
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
