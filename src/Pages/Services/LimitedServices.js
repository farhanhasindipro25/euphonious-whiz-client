import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import LimitedServiceCard from "./LimitedServiceCard";

const LimitedServices = () => {
  const [limitedServices, setLimitedServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setLimitedServices(data));
  }, []);
  return (
    <div className="container mb-5 mt-5">
      <Container>
        <Row className="g-5">
          {limitedServices.map((service) => (
            <LimitedServiceCard
              key={service._id}
              service={service}
            ></LimitedServiceCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LimitedServices;
