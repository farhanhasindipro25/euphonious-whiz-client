import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, serviceImage, price, description, generalRating } =
    service;
  return (
    <Col lg="4" md="6" sm="12">
      <Card className="rounded-0">
        <Card.Img
          variant="top"
          className="img-fluid w-100 rounded-0"
          src={serviceImage}
        />
        <Card.Body>
          <Card.Title className="text-center fw-semibold mb-4">
            {serviceName}
          </Card.Title>
          <div className="d-flex justify-content-between">
            <p className="fw-semibold">
              Price: <span className="text-success">{price} BDT</span>
            </p>
            <p className="fw-semibold">
              Ratings: <span className="text-info">{generalRating}</span>
            </p>
          </div>
          <Card.Text>{description.slice(0, 100) + "..."}</Card.Text>
          <Link className="text-decoration-none" to={`/services/${_id}`}>
            <Button variant="dark" className="rounded-0 d-block mx-auto">
              View Details and Reviews
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
