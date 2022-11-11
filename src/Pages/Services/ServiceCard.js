import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, serviceImage, price, description, generalRating } =
    service;
  // const getId = (event) => {
  //   console.log(event);
  // };
  return (
    <Col lg="4" md="6" sm="12">
      <Card className="rounded-0">
        <PhotoProvider>
          <PhotoView src={serviceImage}>
            <Card.Img
              variant="top"
              className="img-fluid w-100 rounded-0"
              src={serviceImage}
            />
          </PhotoView>
        </PhotoProvider>

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

          <Button variant="dark" className="rounded-0 d-block mx-auto">
            <Link
              to={`/services/${_id}`}
              className="text-decoration-none text-white"
            >
              VIEW DETAILS AND REVIEWS
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
