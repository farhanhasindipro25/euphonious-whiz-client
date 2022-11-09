import React from "react";
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
        <Services></Services>
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
