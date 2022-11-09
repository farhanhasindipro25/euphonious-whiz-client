import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { GrFacebook } from "react-icons/gr";

const ServiceBooking = () => {
  return (
    <div>
      <div className="container mb-5">
        <Card className="bg-dark rounded-0">
          <Card.Body className="text-white">
            <h3 className="fw-bold text-center mt-3 mb-5">
              Book a service online, or visit my store.
            </h3>
            <div>
              <div className="d-flex justify-content-center gap-2">
                <BsFillTelephoneFill className="mt-1"></BsFillTelephoneFill>
                <p>+8801710171017</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <MdLocationOn className="mt-1"></MdLocationOn>
                <p>3/10 Road-10 Uttara Sector-3, Dhaka, Bangladesh</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <GrFacebook className="mt-1"></GrFacebook>
                <p>www.facebook.com/euphoniouswhiz</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ServiceBooking;
