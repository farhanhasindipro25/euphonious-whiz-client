import React from "react";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram, BsTwitch, BsYoutube } from "react-icons/bs";

const Footer = () => {
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
      <div className="d-flex container justify-content-evenly pb-5">
        <h6 className="text-white">Home</h6>
        <h6 className="text-white">Blog</h6>
        <h6 className="text-white">Services</h6>
        <h6 className="text-white">Login</h6>
        <h6 className="text-white">Signup</h6>
      </div>
      <div>
        <p className="text-white text-center pb-3 mb-0">Made with MERNB</p>
        <p className="text-white text-center pb-5 mb-0">
          <small>Copyright © 2022. Euphonious Whiz Service Reviews</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
