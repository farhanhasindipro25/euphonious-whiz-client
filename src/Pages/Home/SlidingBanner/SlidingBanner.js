import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../assets/banner/slide1.jpg";
import slide2 from "../../../assets/banner/slide2.jpg";
import slide3 from "../../../assets/banner/slide3.jpg";

const SlidingBanner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mt-5 mb-5">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption className="mb-lg-5 pb-lg-5 d-lg-block d-md-block d-sm-none d-none">
            <h2>
              Find service reviews of{" "}
              <span className="fw-bold bg-dark text-warning p-lg-2 p-md-1 p-sm-0 p-0">
                Euphonious Whiz
              </span>
              , and add your own!
            </h2>
            <p className="mb-5 pb-5">
              Don't be afraid to give a negative review!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption className="mb-lg-5 pb-lg-5 d-lg-block d-md-block d-sm-none d-none">
            <h2>
              Find service reviews of{" "}
              <span className="fw-bold text-dark bg-warning p-lg-2 p-md-1 p-sm-0 p-0">
                Euphonious Whiz
              </span>
              , and add your own!
            </h2>
            <p className="mb-5 pb-5">
              Don't be afraid to give a negative review!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <Carousel.Caption className="mb-lg-5 pb-lg-5 d-lg-block d-md-block d-sm-none d-none">
            <h2>
              Find service reviews of{" "}
              <span className="fw-bold bg-danger p-lg-2 p-md-1 p-sm-0 p-0">
                Euphonious Whiz
              </span>
              , and add your own!
            </h2>
            <p className="mb-5 pb-5">
              Don't be afraid to give a negative review!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlidingBanner;
