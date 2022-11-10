import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReviewItem from "./Reviews/ReviewItem";
import { Container, Row } from "react-bootstrap";
import useTitle from "../../Hooks/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceDetail = () => {
  useTitle("Service Details");
  const {
    _id,
    serviceName,
    serviceImage,
    price,
    description,
    generalRating,
    reviews,
  } = useLoaderData();
  return (
    <div className="container mb-5 pt-5 pb-5">
      <Card className="rounded-0">
        <div className="d-flex">
          <PhotoProvider>
            <PhotoView src={serviceImage}>
              <Card.Img
                variant="top"
                className="img-fluid w-25 rounded-0"
                src={serviceImage}
              />
            </PhotoView>
          </PhotoProvider>
          <Card.Body className="pt-4">
            <Card.Title className="text-start fw-semibold my-4">
              {serviceName}
            </Card.Title>
            <div className="d-flex justify-content-start gap-5">
              <p className="fw-semibold">
                Price: <span className="text-success">{price} BDT</span>
              </p>
              <p className="fw-semibold">
                Ratings: <span className="text-info">{generalRating}</span>
              </p>
            </div>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </div>
      </Card>

      <div>
        <h4 className="my-5 text-center">
          Reviews of{" "}
          <span className="bg-dark text-white p-2">{serviceName}</span>
        </h4>
        <Container>
          <Row className="g-5">
            {reviews.map((review) => (
              <ReviewItem key={review._id} review={review}></ReviewItem>
            ))}
          </Row>
        </Container>
        <Button
          variant="dark"
          className="rounded-0 fw-semibold d-block mx-auto mt-5"
        >
          <Link to={`/addreview/${_id}`} className="text-decoration-none text-white">
            ADD REVIEW
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetail;
