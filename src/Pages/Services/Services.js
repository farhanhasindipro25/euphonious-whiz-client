import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import useTitle from "../../Hooks/useTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://b6a11-service-review-server-side-beta.vercel.app/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mb-5 mt-5">
      <Container>
        <Row className="g-5">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
