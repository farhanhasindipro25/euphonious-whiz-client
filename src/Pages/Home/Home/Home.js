import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Services from "../../Services/Services";
import ServiceBooking from "../ServiceBooking/ServiceBooking";
import SlidingBanner from "../SlidingBanner/SlidingBanner";
import WorkingProcess from "../WorkingProcess/WorkingProcess";

const Home = () => {
  return (
    <div>
      <SlidingBanner></SlidingBanner>
      {/* Services */}
      <div className="mb-5 pt-5">
        <h3 className="text-center fw-bold">Services</h3>
        <h6 className="text-center mb-5 fw-normal">
          Check out the most demanding services provided by{" "}
          <span className="fw-semibold bg-dark p-2 text-warning">
            Euphonious Whiz
          </span>
        </h6>
        <div className="mt-5 mb-5">
          <Services></Services>
          <Link to="/services" className="text-decoration-none">
            <Button className="rounded-0 d-block mx-auto" variant="dark">
              View All Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Book a Service */}
      <div>
        <ServiceBooking></ServiceBooking>
      </div>
      {/* My Working Process */}
      <div>
        <WorkingProcess></WorkingProcess>
      </div>
    </div>
  );
};

export default Home;
