import React from "react";
import Services from "../../Services/Services";
import ServiceBooking from "../ServiceBooking/ServiceBooking";
import SlidingBanner from "../SlidingBanner/SlidingBanner";

const Home = () => {
  return (
    <div>
      <SlidingBanner></SlidingBanner>
      {/* Services */}
      <div className="mb-5">
        <h3 className="text-center fw-bold">Services</h3>
        <p className="text-center mb-5">
          Check out the most demanding services provided by Euphonious Whiz
        </p>
        <Services></Services>
      </div>

      {/* Book a Service */}
      <div>
        <ServiceBooking></ServiceBooking>
      </div>
    </div>
  );
};

export default Home;
