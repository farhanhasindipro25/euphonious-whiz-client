import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/AuthProvider";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="py-4"
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
            <Nav className="ms-auto d-flex align-items-center">
              {user?.email ? (
                <>
                  <Link
                    to="/"
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
                    to="/addservice"
                    className="text-decoration-none fw-semibold text-white p-3 ms-3"
                  >
                    Add Services
                  </Link>
                  <Link
                    to="/myreviews"
                    className="text-decoration-none fw-semibold text-white p-3 ms-3"
                  >
                    My Reviews
                  </Link>
                  <Link
                    to=""
                    className="text-decoration-none fw-semibold text-white p-3 ms-3"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
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
                    className="text-decoration-none fw-semibold text-white p-3 ms-3"
                  >
                    Login
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
