import React, { useContext } from "react";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram, BsTwitch, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-dark">
      <div className="pt-5 pb-4">
        <h3 className="text-center text-white">Euphonious Whiz</h3>
        <h6 className="text-center text-white">Service Reviews</h6>
      </div>
      <div className="text-white d-flex justify-content-center gap-5 pb-5">
        <GrFacebook></GrFacebook>
        <BsInstagram></BsInstagram>
        <BsYoutube></BsYoutube>
        <BsTwitch></BsTwitch>
      </div>
      <div className="d-flex container justify-content-evenly align-items-center mb-5 pb-5 w-50">
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
      </div>
      <div className="pb-5">
        <p className="text-white text-center pb-3 mb-0">
          Made with MERN stack and React-Bootstrap
        </p>
        <p className="text-white text-center pb-5 mb-0">
          <small>Copyright © 2022. Euphonious Whiz Service Reviews</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
