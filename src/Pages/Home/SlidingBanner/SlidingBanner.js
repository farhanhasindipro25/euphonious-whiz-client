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
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlidingBanner;
